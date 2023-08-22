import mongoose from "mongoose";

const {Schema} = mongoose

const portfoliosSchema = new Schema({
    category:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        required: true,
    },
    body:{
        type: String,
        required: true,
    },
    img:{
        type: String,
        required: true,
    }
},{ 
    timestamps: true 
})

module.exports = mongoose.models.Portfolios || mongoose.model('Portfolios', portfoliosSchema);