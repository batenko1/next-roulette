import { connectToDatabase } from "@/utils/connectMongo";
import mongoose from "mongoose";


export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const db = await connectToDatabase();

            const { text } = req.body;

            // Прямое использование Mongoose для сохранения данных
            const result = await db.collection('messages').insertOne({ text });

            const insertedId = result.insertedId;

            const createdDocument = await db.collection('messages').findOne({ _id: new mongoose.Types.ObjectId(insertedId) })

            res.status(200).json({ success: true, createdDocument, insertedId });

        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ success: false, error: error.message });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }

}