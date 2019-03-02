const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const videoInfo = require('./routes/videos')
const PORT = process.argv[2] || 8080

app.use(cors())
app.use(bodyParser.json())

app.use((request, response, next) => {
  console.log(`${new Date()} ${request.method} ${request.path}`)
  next()
})

app.use('/videos', videoInfo)

app.listen(PORT, () => {
  console.log(`Server running and listening on port ${PORT}...`)
})


