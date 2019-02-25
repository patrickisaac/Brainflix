import React, { Component } from 'react';
import Home from './Home'
import Nav from './components/Nav'
import { Route, Switch } from 'react-router-dom'
import UploadPage from './components/UploadPage'
import './App.css'
// import Axios from 'axios';

//USED FOR NAVIGATION COMP.
const profile = [
  "/Assets/Images/Mohan-muruge.jpg"
]

class App extends Component {
  render() {
    return (
      <div>
        <Nav profile={profile}/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/upload" component={UploadPage} />
          <Route path="/videos/:id" component={Home} /> 
          }} />
        </Switch>
      </div>
    );
  }
}

export default App;
