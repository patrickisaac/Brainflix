const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const videoInfo = require('./routes/videos')
const logger = require('./routes/logger')
const PORT = process.argv[2] || 8080

app.use(cors())
app.use(bodyParser.json())

app.use('/', logger)
app.use('/videos', videoInfo)

app.listen(PORT, () => {
  console.log(`Server running and listening on port ${PORT}...`)
})