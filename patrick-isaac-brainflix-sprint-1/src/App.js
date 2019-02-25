import React, { Component } from 'react';
import Nav from './components/Nav'
import Video from './components/Video'
import SideVideo from './components/SideVideo'
import VideoInfo from './components/VideoInfo'
import CommentSection from './components/CommentSection'
import './App.css'


class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Video />
        <div className="videoArea">
          <VideoInfo />
          <CommentSection />
          <div className="sideVideo__desktop">
            <SideVideo />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
