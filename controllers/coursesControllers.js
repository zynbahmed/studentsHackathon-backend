const { Course } = require("../models")

const GetCourses = async (req, res) => {
  try {
    const courses = await Course.find({})
    res.send(courses)
  } catch (error) {
    throw error
  }
}

const GetCourseDetails = async (req, res) => {
  const courseID = req.params.course_id
  try {
    const course = await Course.findById(courseID).populate([
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
    ])
    res.send(course)
  } catch (error) {
    throw error
  }
}

const CreateCourse = async (req, res) => {
  try {
    const course = await Course.create({ ...req.body })
    res.send(course)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetCourses,
  GetCourseDetails,
  CreateCourse
}
