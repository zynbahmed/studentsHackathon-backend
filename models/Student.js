const { Schema } = require("mongoose")

const studentSchema = new Schema(
  {
    name: { type: Number, required: true },
    email: { type: String },
    id: { type: Number }, 
    courses: [{type: Schema.Types.ObjectId, ref: "Course"}]
  },
  { timestamps: true }
)

module.exports = studentSchema
