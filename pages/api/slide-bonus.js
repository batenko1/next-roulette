
import Transaction from "@/utils/models/TransactionModel.js";

export default async function handler(request, response) {

    if(request.method === 'POST') {

        try {

            const {user} = request.body
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);

            console.log(user)

            const existBonus = await Transaction.findOne({
                user_id: user.userId,
                type_id:2,
                created_at: {$gt:yesterday}
            })
                .sort({ _id: -1 })
                .limit(1);

            response.status(200).json({
                existBonus
            })

        }
        catch (error) {
            console.error("Error:", error);
            response.status(500).json({ error: "Internal Server Error" });
        }
    }
    else {
        response.status(405).json({ error: "Method Not Allowed" });
    }

}