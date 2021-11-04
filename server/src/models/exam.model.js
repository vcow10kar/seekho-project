const mongoose = require("mongoose")

const examSchema = new mongoose.Schema(
    {
        exam_name: { type: String, trim: true, required: true },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const Exam = mongoose.model("exams", examSchema);

module.exports = Exam;
