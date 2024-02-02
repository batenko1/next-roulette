import jwt from 'jsonwebtoken';
import getBalanceUser from "@/utils/balanceUser.js";

export default async function handler(req, res) {
    const token = req.headers.authorization?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({message: 'Unauthorized'});
    }

    try {
        // Проверка и верификация токена
        const decodedToken = jwt.verify(token, 'key');

        // В decodedToken теперь содержатся идентификационные данные пользователя
        const userId = decodedToken.userId;
        const userEmail = decodedToken.userEmail;

        const balance = await getBalanceUser(userId)


        // Здесь вы можете использовать идентификационные данные пользователя
        return res.status(200).json({userId, userEmail, balance});
    } catch (error) {
        return res.status(200).json({message: 'Unauthorized'});
    }
}
