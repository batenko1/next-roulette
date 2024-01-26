import { connectToDatabase } from "@/utils/connectMongo";
import mongoose from "mongoose";
import User from "@/utils/models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
    if (req.method === 'POST') {

        try {

            const { login, name, lastName, email, password, repeatPassword } = req.body;
            const existingUser = await User.findOne({ email });

            if (existingUser) {
                return res.status(400).json({ message: 'User with this email already exists' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = new User({
                login,
                name,
                last_name:lastName,
                email,
                password: hashedPassword,
            });

            await newUser.save();

            const token = jwt.sign({ userId: newUser._id, userEmail: newUser.email }, 'key', {
                expiresIn: '24h', // Token expiration time
            });


            res.status(201).json({
                message: 'Регистрация успешна',
                user: {
                    id: newUser._id,
                    name: newUser.name,
                    email: newUser.email,
                },
                token
            });
        }
        catch (error) {

            console.log(error)
            res.status(422).json({ message: 'Ошибки валидации' });
        }

    } else {
        res.status(405).json({ message: 'Метод не разрешен' });
    }
}