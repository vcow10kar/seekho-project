/********* Genre Schema *********/

const mongoose = require("mongoose");

const genreSchema = new mongoose.Schema(
  {
    genre_name: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const Genre = mongoose.model("genre", genreSchema);

module.exports = Genre;
