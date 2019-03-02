import React from 'react'
import axios from 'axios'
import '../global_css/uploadPage_css/styles.css'

const thumbnail = "https://wallpapercave.com/wp/wc1748682.jpg"
const url = "http://localhost:8080/videos"

class UploadPage extends React.Component {

  uploadVideo = () => {
     axios.post(url, {
       title: this.titleInput.value,
       description: this.descriptionInput.value
      })
      .then(response => {
        this.titleInput.value = ""
        this.descriptionInput.value = ""
      })
  }

  cancelVideo = () => {
    this.titleInput.value = ""
    this.descriptionInput.value = ""
  }

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
          TITLE YOUR VIDEO
          <input 
          className="upload__title" 
          type="text" 
          placeholder="Add title to your video" 
          ref={self => (this.titleInput = self)}
          />
          ADD A VIDEO DESCRIPTION
          <textarea 
          className="upload__description" 
          type="textarea" 
          placeholder="Add a description to your video" ref={self => (this.descriptionInput = self)}
          />
          </form>
        </div>
        <div className="upload__publish">
          <button 
          className="publish__mobile" 
          onClick={this.uploadVideo}>PUBLISH
          </button>
          <h3 onClick={this.cancelVideo}>CANCEL</h3>
          <button onClick={this.uploadVideo}className="publish">PUBLISH</button>
        </div>
      </div>
    )
  }
}

export default UploadPage;