import mongoose from "mongoose";

const {Schema} = mongoose

const contactSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    contact:{
        type: String,
        required: true,
    },
    context:{
        type: String,
        required: true,
    }
},{ 
    timestamps: true 
})

module.exports = mongoose.models.Contact || mongoose.model('Contact', contactSchema);