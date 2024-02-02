
import mongoose from 'mongoose';

const categoryGameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    }

});

const CategoryGame = mongoose.models.CategoryGame || mongoose.model('CategoryGame', categoryGameSchema);

export default CategoryGame;