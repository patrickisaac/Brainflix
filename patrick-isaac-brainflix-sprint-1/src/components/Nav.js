import React from 'react'
import '../global_css/nav_css/styles.css';


const profile = [
  "/Assets/Images/Mohan-muruge.jpg"
]

class Nav extends React.Component {
  render() {
    return (
      <div className="nav__container">
        <div className="navigation">
          <img src="/Assets/Logo/Logo-brainflix.svg" className="nav__logo" alt="logo"/>
          <div className="nav__upload">
            <input type="text" placeholder="Search" className="nav__search" alt="search"/>
            <button className="upload-btn">UPLOAD</button>
            <img src={profile} className="profile" alt="profile"/>
          </div>
        </div>       
      </div>
    )
  }
}

export default Nav;