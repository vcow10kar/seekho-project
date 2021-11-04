const mongoose = require("mongoose")

const subjectSchema = new mongoose.Schema(
    {
        subject_name: { type: String, trim: true, required: true },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const Subject = mongoose.model("subjects", subjectSchema);

module.exports = Subject;
