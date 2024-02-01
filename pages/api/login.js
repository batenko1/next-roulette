import User from "@/utils/models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
    if (req.method === 'POST') {

        try {
            const {email, password} = req.body
            const existingUser = await User.findOne({email});

            if (existingUser) {


                const result = await comparePassword(password, existingUser.password);

                if(result) {
                    const token = jwt.sign({userId: existingUser._id, userEmail: existingUser.email}, 'key', {
                        expiresIn: '48h', // Token expiration time
                    });

                    res.status(201).json({
                        message: 'Авторизация успешна',
                        user: {
                            id: existingUser._id,
                            name: existingUser.name,
                            email: existingUser.email,
                        },
                        token
                    });
                }
                else {
                    throw new Error()
                }


            } else {
                return res.status(400).json({message: 'User with this email dont isset'});
            }

        } catch (error) {
            console.log(error)
            res.status(422).json({message: 'Ошибки валидации'});
        }


    } else {
        res.status(405).json({message: 'Метод не разрешен'});
    }
}


async function comparePassword(password, hashedPassword) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hashedPassword, (err, result) => {
            if (err) {
                reject(err); // Обработка ошибок
            } else {
                resolve(result); // Результат сравнения
            }
        });
    });
}