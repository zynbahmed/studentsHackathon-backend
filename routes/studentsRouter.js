const router = require("express").Router()
const controller = require("../controllers/studentsController")

router.get("/", controller.GetStudents)
router.get("/:student_id", controller.GetStudentDetails)
router.post("/", controller.CreateStudent)
router.put("/:student_id", controller.UpdateStudent)

module.exports = router
