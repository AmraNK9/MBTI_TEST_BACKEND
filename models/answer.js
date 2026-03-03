const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
    session_id: {
        type: String,
        required: true,
        index: true
    },
    user_id: {
        type: String,
        required: true
    },
    question_id: {
        type: Number,
        required: true
    },
    question_type: {
        type: String,
        required: true,
        enum: ["E/I", "S/N", "T/F", "J/P"]
    },
    // user_answer: {
    //     type: String,
    //     required: true
    // },
    direction: {
        type: String,
        required: true
    },
    confidence: {
        type: Number,
        required: true,
        min: 0,
        max: 6
    },
    response_time_ms: {
        type: Number,
        required: true,
        comment: "Time in milliseconds the user took to answer this question"
    }
}, { timestamps: true });

// Compound index to avoid duplicate answers per session
answerSchema.index({ session_id: 1, question_id: 1 }, { unique: true });

module.exports = mongoose.model("Answer", answerSchema);