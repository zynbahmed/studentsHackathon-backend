const mongoose = require("mongoose")
const coursesScheme = require("./Course")
const studentsSchema = require("./Student")
const gradesSchema = require("./Grade")

const Course = mongoose.model("Course", coursesScheme)
const Student = mongoose.model("Student", studentsSchema)
const Grade = mongoose.model("Grade", gradesSchema)

module.exports = {
  Course,
  Student,
  Grade
}
