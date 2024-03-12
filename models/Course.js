const { Schema } = require("mongoose")

const courseSchema = new Schema(
  {
    name: { type: String, required: true },
    grade: [
      {
        student: { type: Schema.Types.ObjectId, ref: "Student" },
        grade: { type: Schema.Types.ObjectId, ref: "Grade" }
      }
    ]
  },
  { timestamps: true }
)

module.exports = courseSchema
