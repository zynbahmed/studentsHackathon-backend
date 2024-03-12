const router = require("express").Router()
const controller = require("../controllers/coursesControllers")

router.get("/", controller.GetCourses)
router.get("/:course_id", controller.GetCourseDetails)
router.post("/", controller.CreateCourse)

module.exports = router
