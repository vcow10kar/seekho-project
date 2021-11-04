const mongoose = require("mongoose");


const bookSchema = mongoose.Schema({
    title:{type:String,require:true},
  genre_id: { type: mongoose.Schema.Types.ObjectId, ref: "genre", required: true },
  author_id: { type: mongoose.Schema.Types.ObjectId, ref: "author", required: true },
  category_id: { type: mongoose.Schema.Types.ObjectId, ref: "category", required: true },
  cover_image_url: {type:String,required: true},
  page_count:{type:Number,require:true},
  description:{type:String,require:false},
  pdf_file_url:{type:String,require:false},
  language:{type:String,require:false},
});

const Books = new mongoose.model("books", bookSchema);

module.exports = Books;
