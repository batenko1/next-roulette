import Transaction from "@/utils/models/TransactionModel.js";

const getBalanceUser = async (userId) => {

    const sumResult = await Transaction.aggregate([
        {
            $match: {
                user_id: userId
            }
        },
        {
            $group: {
                _id: null,
                totalSum: { $sum: "$price" }
            }
        }
    ]);

    return sumResult.length > 0 ? sumResult[0].totalSum : 0;

}

export default getBalanceUser