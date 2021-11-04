const mongoose = require("mongoose");

const userBookListSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  book: [{ type: mongoose.Schema.Types.ObjectId, ref: "books", required: true }],
  academic: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "academic_books",
      required: true,
    },
  ],
});

const UserBookList = new mongoose.model("user_book_list", userBookListSchema);

module.exports = UserBookList;
