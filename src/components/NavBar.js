import React, { Component } from 'react'
import "./NavBar.css"

import { Link } from "react-router-dom";



export default class NavBar extends Component {
  render() {
    return (
      <div className="Navbar">
        <Link to="/" >Home</Link>
        <Link to="/events" >Events</Link>
        <Link to="/friends" >Friends</Link>
        <div id="Search bar">
          <input type="text" placeholder="search"></input>
        </div>
        <a id="Profile" href="./eee.html">Profile</a>
      </div>
    )
  }
}
