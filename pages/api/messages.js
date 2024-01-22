import { connectToDatabase } from "@/utils/connectMongo";

export default async function handler(req, res) {

    let data

    try {
        const db = await connectToDatabase();
        const collection = await db.collection('messages');
        data = await collection.find({}).toArray();
    }
    catch (error) {

    }


    res.status(200).json({ data });
}