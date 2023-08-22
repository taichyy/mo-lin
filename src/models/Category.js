import mongoose from "mongoose";

const {Schema} = mongoose

const categorySchama = new Schema({
    category:{
        type: String,
        required: true,
    },
    categoryCH:{
        type: String,
        required: true,
    },
    order:{
        type: String,
        required: true,
        unique: true,
    },
},{ 
    timestamps: true 
})

module.exports = mongoose.models.Category || mongoose.model('Category', categorySchama);