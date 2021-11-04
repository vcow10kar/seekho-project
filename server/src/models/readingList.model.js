const mongoose = require("mongoose");

const readingListSchema = mongoose.Schema({
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

const ReadingList = new mongoose.model("reading_list", readingListSchema);

module.exports = ReadingList;
