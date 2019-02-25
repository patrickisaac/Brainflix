import React from 'react'
import "../global_css/videoInfo_css/styles.css"

const date = (d) => {
  return new Date(d).toLocaleDateString()
}

class VideoInfo extends React.Component {
  render() {

    return (
      <div className="container">
        <h1 className="video__title">{this.props.mainVideo.title}</h1>
      <div className="video__container">
        <div className="video__info">
          <h4 className="video__channel">By {this.props.mainVideo.channel}</h4>
          <p className="video__date">{date(this.props.mainVideo.timestamp)}</p>
        </div>
        <div className="video__stats">
          <div className="video__views">
          <img src="/Assets/Icons/SVG/Icon-views.svg" alt="views"/>
          <p>{this.props.mainVideo.views}</p>
          </div>
          <div className="video__likes">
          <img src="/Assets/Icons/SVG/Icon-likes.svg" alt="likes"/>
          <p>{this.props.mainVideo.likes}</p>
          </div> 
        </div>
      </div>      
        <div className="video__description">
          <p>{this.props.mainVideo.description}</p>
        </div>
      </div>
    )
  }
}

export default VideoInfo