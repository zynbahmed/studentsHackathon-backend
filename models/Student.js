const { Schema } = require("mongoose")

const studentSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String },
    id: { type: Number },
    courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
    GPA: { type: Number, default: 0 }
  },
  { timestamps: true }
)

module.exports = studentSchema
