const express = require('express')
const router = express.Router()
const fs = require('fs')
const videos = require('./database/videos')
const videoDetails = require('./database/videoDetails')
const randomString = require('randomstring')

router.get('/', (request, response) => {
  response.json(videos)
})

router.get('/:id', (request, response) => {
  const id = request.params.id;
  const selectVideo = videoDetails.find(video => {
    return id === video.id
  })
  response.json(selectVideo)
})

router.post('/', (request, response) => {
  const videoId = randomString.generate({
    length: 12,
    charset: 'alphanumeric'
  })

  const newVideo = {
    id: videoId,
    title: request.body.title,
    channel: "Epiphany",
    image: "https://wallpapercave.com/wp/wc1748682.jpg"
  }

  const newVideoDetails = {
    id: videoId,
    title: request.body.title,
    channel: "Epiphany",
    image: "https://wallpapercave.com/wp/wc1748682.jpg",
    description: request.body.description,
    views: 0,
    likes: 0,
    duration: "11:11",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: new Date().toLocaleDateString(),
    comments: []
  }
  
  videos.push(newVideo)
  videoDetails.push(newVideoDetails)
  fs.writeFileSync('./routes/database/videos.json', JSON.stringify(videos))
  fs.writeFileSync('./routes/database/videoDetails.json', JSON.stringify(videoDetails))
  response.json("A new video has been uploaded...")
})

module.exports = router