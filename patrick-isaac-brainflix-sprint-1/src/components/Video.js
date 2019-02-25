import React from 'react'
import '../global_css/video_css/styles.css'
// import VideoInfo from './VideoInfo'
// import CommentSection from './CommentSection'

const currentVideo = [
  "/Assets/Images/video-list-0.jpg"
]

class Video extends React.Component {
  render() {
    return (
      <div className="video__section">
        <video className="currentVideo" controls poster={currentVideo}></video>
      </div>
    )
  }
}

export default Video