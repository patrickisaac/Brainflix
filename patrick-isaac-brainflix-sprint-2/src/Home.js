import React, { Component } from 'react';
import Video from './components/Video'
import SideVideo from './components/SideVideo'
import VideoInfo from './components/VideoInfo'
import CommentSection from './components/CommentSection'
import axios from 'axios'
import './App.css'


const api_key = "4abc64a1-403f-4d37-8ad8-5c49d60737b0"
const url = `https://project-2-api.herokuapp.com/videos?api_key=${api_key}`
const mainVideoUrl = id => `https://project-2-api.herokuapp.com/videos/${id}?api_key=${api_key}`

class Home extends Component {
  state = {
    sideVideos: [],
    currentVidId: "",
    mainVideo: null,
    comments: [],
  }

  componentDidMount() {
    axios
      .get(url)
      .then(response => {
        this.setState({
          sideVideos: response.data,
          currentVidId: response.data[0].id
        })
      })
      .then(response => {
        axios.get(mainVideoUrl(this.state.currentVidId))
        .then(response => {
          this.setState({
              mainVideo: response.data,
              comments: response.data.comments
            })
          })
      })
  }

//THE CONDITIONAL STATEMENT PREVENTS THE COMPONENT UPDATING AND GOING INTO A LOOP//  
  componentDidUpdate(prevProps) {
    if(this.props.match.params.id !== prevProps.match.params.id) {
    axios.get(mainVideoUrl(this.props.match.params.id))
      .then(response => {
        console.log(this.props.match.params.id)
        this.setState({
          mainVideo: response.data,
          comments: response.data.comments
        })
      })
  }
}

  render() {
    if (this.state.mainVideo === null) return "Loading page...";
    return (
      <div>
        <Video mainVideo={this.state.mainVideo}/>
        <div className="videoArea">
          <div className="video__comments__area">
          <VideoInfo mainVideo={this.state.mainVideo}/>
          <CommentSection comments={this.state.comments}/>
          </div>
          <div className="sideVideo__desktop">
            <SideVideo sideVideos={this.state.sideVideos} currentVidId={this.props.match.params.id}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;