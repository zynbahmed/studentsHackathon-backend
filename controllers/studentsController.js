const { Student, Course } = require("../models")

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
      path: "courses",
      populate: [
        {
          path: "grades",
          populate: {
            path: "student"
          }
        },
        {
          path: "grades",
          populate: {
            path: "grade"
          }
        }
      ]
    })

    if (student.courses && student.courses.length > 0) {
      let totalScore = 0
      let totalGrades = 0

      for (const course of student.courses) {
        for (const grade of course.grades) {
          if (grade && grade.student._id.toString() === studentID) {
            totalScore += parseInt(grade.grade.score)
            totalGrades++
          }
        }
      }

      if (totalGrades > 0) {
        const overallGPA = (totalScore / totalGrades).toFixed(2)
        await Student.updateOne({ _id: studentID }, { GPA: overallGPA })
      }
    }

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
    // console.log(req.body)
    await Course.updateOne(
      { _id: req.body.course },
      {
        $push: {
          grades: {
            student: req.params.student_id,
            grade: req.body.grade
          }
        }
      }
    )
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
