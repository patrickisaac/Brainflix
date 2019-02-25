import React from 'react'
import '../global_css/nav_css/styles.css';
import { Link } from 'react-router-dom'




class Nav extends React.Component {
  render() {
    return (
      <div className="nav__container">
        <div className="navigation">
          <Link to="/" className="nav__logo"><img src="/Assets/Logo/Logo-brainflix.svg"  alt="logo"/></Link>
          <div className="nav__upload">
            <input type="text" placeholder="Search" className="nav__search" alt="search"/>
            <Link to="/upload" className="upload-btn">UPLOAD</Link>
            <img src={this.props.profile} className="profile" alt="profile"/>
          </div>
        </div>       
      </div>
    )
  }
}

export default Nav;