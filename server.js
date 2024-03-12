const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const CoursesRouter = require('./routes/coursesRouter')
const StudentskRouter = require('./routes/studentsRouter')
const GradesRouter = require('./routes/gradesRouter')

const PORT = process.env.PORT || 3001

const db = require('./db')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/courses', CoursesRouter)
app.use('/students', StudentskRouter)
app.use('/grades', GradesRouter)

app.use('/', (req, res) => {
  res.send(`Connected!`)
})

app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})
