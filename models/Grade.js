const { Schema } = require("mongoose")

const gradeSchema = new Schema(
  {
    score: { type: Number },
    letter: { type: String }
  },
  { timestamps: true }
)

module.exports = gradeSchema
