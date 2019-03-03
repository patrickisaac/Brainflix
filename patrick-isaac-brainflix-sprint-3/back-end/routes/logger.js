const express = require('express')
const router = express.Router()
const logFiles = require('./database/logfiles')
const fs = require('fs')

router.use((request, response, next) => {
  const newLog = {
    date: new Date(),
    method: request.method,
    path: request.path
   }
 next()

 logFiles.push(newLog)
 fs.writeFileSync('./routes/database/logfiles.json', JSON.stringify(logFiles))
})

module.exports = router