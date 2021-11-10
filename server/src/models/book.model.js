const mongoose = require("mongoose");


const bookSchema = mongoose.Schema({
    title:{type:String,require:true, trim: true},
    genre: {type:String,required: true, trim: true},
    author: {type:String,required: true, trim: true},
    category: {type:mongoose.Schema.Types.ObjectId, ref: 'category', required: true},
    coverImageUrl: {type:String,required: true, trim: true},
    pdfFileUrl:{type:String,require:false, trim: true},
    language:{type:String,require:false, trim: true},
});

const Books = new mongoose.model("books", bookSchema);

module.exports = Books;
