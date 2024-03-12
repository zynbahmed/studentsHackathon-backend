const mongoose = require("mongoose")
const coursesScheme = require("./Course")
const studentsSchema = require("./Student")
const gradesSchema = require("./Grade")

const Course = mongoose.model("ThemePark", coursesScheme)
const Student = mongoose.model("WaterPark", studentsSchema)
const Grade = mongoose.model("WaterPark", gradesSchema)

module.exports = {
  Course,
  Student,
  Grade
}
