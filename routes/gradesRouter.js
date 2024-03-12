const router = require("express").Router()
const controller = require("../controllers/gradesController")

router.get("/", controller.GetGrades)

module.exports = router
