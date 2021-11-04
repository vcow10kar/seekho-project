const mongoose = require('mongoose');

const academicBookSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, trim: true },
        board_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "boards" },
        grade_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "grades" },
        subject_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "subjects" },
        exam_id: { type: mongoose.Schema.Types.ObjectId, ref: "exams" },
        cover_image_url: { type: String, required: true, trim: true },
        description: { type: String, required: false, trim: true },
        pdf_file_url: { type: String, trim: true, required: true },
        language: { type: String, trim: true, required: true }
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const AcademicBook = mongoose.model('academic_books', academicBookSchema);

module.exports = AcademicBook;