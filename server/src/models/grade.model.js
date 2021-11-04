const mongoose = require("mongoose")

const gradeSchema = new mongoose.Schema(
    {
        grade: { type: String, trim: true, required: true },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const Grade = mongoose.model("grades", gradeSchema);

module.exports = Grade;
