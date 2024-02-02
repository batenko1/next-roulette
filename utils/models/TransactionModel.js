
import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min:0
    },
    type_id: {
        type: Number,
        required: true
    },
    game_id: {
        type:Number
    }

});

const Transaction = mongoose.models.Transaction || mongoose.model('Transaction', transactionSchema);

export default Transaction;