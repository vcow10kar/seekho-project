const mongoose = require("mongoose")

const boardSchema = new mongoose.Schema(
    {
        board_name: { type: String, trim: true, required: true },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const Board = mongoose.model("boards", boardSchema);

module.exports = Board;
