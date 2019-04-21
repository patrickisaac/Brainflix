import React from 'react'
import '../global_css/sideVideo_css/styles.css'
import { Link } from 'react-router-dom'

class SideVideo extends React.Component {
  render() {
    const sideVideoList = this.props.sideVideos.map((sideVideo, id) => {
      if (sideVideo.id !== this.props.currentVidId) {
      return (
        <div className="nextVideo" key={id}>
          <Link to={"/videos/" + sideVideo.id} className="nextVideo">
            <img src={sideVideo.image} alt=""/>
            <div className="nextVideo__info">
              <h4 className="nextVideo__title">{sideVideo.title}</h4>
              <p className="nextVideo__channel">{sideVideo.channel}</p>
            </div>
          </Link>
        </div>        
        )
      }
      return null 
    })
    return (
      <div className="nextVideos">
        <h4>NEXT VIDEO</h4>
        {sideVideoList}
      </div>
    )
  }
}

export default SideVideo