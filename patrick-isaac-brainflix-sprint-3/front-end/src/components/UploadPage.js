import React from 'react'
import '../global_css/uploadPage_css/styles.css'

const thumbnail = "/Assets/Images/Upload-video-preview.jpg"

class UploadPage extends React.Component {
  render() {
    return (
      <div className="upload__container">
        <h1 className="title">Upload Video</h1>
        <div className="upload__section">
          <div className="upload__video">
          <h4>VIDEO THUMBNAIL</h4>
          <img className="upload__thumbnail" src={thumbnail} alt="" />
          </div>
          <form className="upload__form">
          TITLE YOUR VIDEO<input className="upload__title" type="text" placeholder="Add title to your video"/>
          ADD A VIDEO DESCRIPTION<textarea className="upload__description" type="textarea" placeholder="Add a description to your video" />
          </form>
        </div>
        <div className="upload__publish">
          <button className="publish__mobile">PUBLISH</button>
          <h3>CANCEL</h3>
          <button className="publish">PUBLISH</button>
        </div>
      </div>
    )
  }
}

export default UploadPage;