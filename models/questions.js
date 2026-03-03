const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    question_id: {
        type: String,
        required: true,
        unique: true
    },
    question_text: {
        type: String,
        required: true
    },
    question_type: {
        type: String,
        required: true,
        enum: ["E/I", "S/N", "T/F", "J/P"]
    },
    options: {
        type: [String],
        default: []
    }
}, { timestamps: true });

module.exports = mongoose.model("Question", questionSchema);