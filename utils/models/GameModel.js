
import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema({
    game_id: {
        type: String,
        required: true,
    },
    winner_user_id: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        default: 1
    },
    variable_game: {
        type: String,
        default: 'classic'
    },
    created_at: {
        type:Date,
        default: new Date()
    }

});

const Game = mongoose.models.Game || mongoose.model('Game', gameSchema);

export default Game;