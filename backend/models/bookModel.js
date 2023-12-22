import mongoose from "mongoose";

const BookSchema = mongoose.Schema({
    index: {
        type: Number,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },
    
    publishYear: {
        type: Number,
        required: true
    }
})

export const Book = mongoose.model('Book', BookSchema);