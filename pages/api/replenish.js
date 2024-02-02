import Transaction from "@/utils/models/TransactionModel.js";
import getBalanceUser from "@/utils/balanceUser.js";
export default async function handler(request, response) {

    if(request.method === 'POST') {
        try {

            const { count, user, type } = request.body;

            const transaction = new Transaction({
                user_id: user.userId,
                price: count,
                type_id:type,
                created_at: new Date()
            })

            await transaction.save()

            const totalSum = await getBalanceUser(user.userId)

            response.status(201).json({
                message: 'Успешное пополнение',
                balance: totalSum
            })


        }
        catch (error) {

        }
    }
    else {
        response.status(405).json({ success: false, message: 'Method Not Allowed' });
    }

}