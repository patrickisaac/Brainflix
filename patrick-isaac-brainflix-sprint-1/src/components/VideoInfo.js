import React from 'react'
import "../global_css/videoInfo_css/styles.css"


const mainVideo = {
  id: '#',
  title: 'BMX Rampage: 2018 Highlights',
  description: 'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title',
  channel: ' Red Cow',
  views: '1,001,023',
  likes: '110,985',
  duration: '#',
  video: '#',
  timestamp: '12/18/2018',
};


class VideoInfo extends React.Component {
  render() {

    return (
      <div className="container">
        <h1 className="video__title">{mainVideo.title}</h1>
      <div className="video__container">
        <div className="video__info">
          <h4 className="video__channel">By{mainVideo.channel}</h4>
          <p className="video__date">{mainVideo.timestamp}</p>
        </div>
        <div className="video__stats">
          <div className="video__views">
          <img src="/Assets/Icons/SVG/Icon-views.svg" alt="views"/>
          <p>{mainVideo.views}</p>
          </div>
          <div className="video__likes">
          <img src="/Assets/Icons/SVG/Icon-likes.svg" alt="likes"/>
          <p>{mainVideo.likes}</p>
          </div> 
        </div>
      </div>      
        <div className="video__description">
          <p>{mainVideo.description}</p>
        </div>
      </div>
    )
  }
}

export default VideoInfo