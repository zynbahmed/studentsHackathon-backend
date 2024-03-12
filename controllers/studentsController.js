const { Student } = require("../models")

const GetStudents = async (req, res) => {
  try {
    const students = await Student.find({})
    res.send(students)
  } catch (error) {
    throw error
  }
}

const GetStudentDetails = async (req, res) => {
  const studentID = req.params.student_id
  try {
    const student = await Student.findById(studentID).populate("courses")
    res.send(student)
  } catch (error) {
    throw error
  }
}

const CreateStudent = async (req, res) => {
  try {
    const student = await Student.create({ ...req.body })
    res.send(student)
  } catch (error) {
    throw error
  }
}

const UpdateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.student_id,
      req.body,
      { new: true }
    )
    res.send(student)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetStudents,
  GetStudentDetails,
  CreateStudent,
  UpdateStudent
}
