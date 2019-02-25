import React from 'react'
import '../global_css/video_css/styles.css'

class Video extends React.Component {
  render() {
    return (
      <div className="video__section">
        <video className="currentVideo" controls poster={this.props.currentVidImg}></video>
      </div>
    )
  }
}

export default Video