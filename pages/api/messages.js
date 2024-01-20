import { connectToDatabase } from "@/utils/connectMongo";

export default async function handler(req, res) {
    const db = await connectToDatabase();
    const collection = db.collection('messages');
    const data = await collection.find({}).toArray();

    res.status(200).json({ data });
}