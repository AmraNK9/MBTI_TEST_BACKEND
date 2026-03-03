//user and MBTI type model
//user_nickname,age,gender,MBTI_type,Persentage of I,E,S,N,T,F,J,P
const mongoose = require("mongoose");

const userMBTISchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    user_nickname: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    MBTI_type: {
        type: String,
        required: true
    },
    percentage: {
        type: Object,
        required: true
    }
});

module.exports = mongoose.model("UserMBTI", userMBTISchema);