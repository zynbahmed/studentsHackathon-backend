const { Student, Course } = require('../models')

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
    const student = await Student.findById(studentID).populate({
      path: 'courses',
      populate: [
        {
          path: 'grades',
          populate: {
            path: 'student'
          }
        },
        {
          path: 'grades',
          populate: {
            path: 'grade'
          }
        }
      ]
    })
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
    const student = await Student.updateOne(
      { _id: req.params.student_id },
      { $push: { courses: req.body.course } }
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
