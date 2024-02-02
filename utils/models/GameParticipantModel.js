
import mongoose from 'mongoose';

const gameParticipantSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
    },
    game_id: {
        type: String,
        required: true
    },
    bet: {
        type: Number,
        required: true
    }

});

const GameParticipant = mongoose.models.GameParticipant || mongoose.model('CategoryGame', gameParticipantSchema);

export default GameParticipant;