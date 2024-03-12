const { Grade } = require("../models")

const GetGrades = async (req, res) => {
  try {
    const grades = await Grade.find({})
    res.send(grades)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetGrades
}
