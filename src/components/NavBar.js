import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
      <div className="Navbar">
        <a id="Home" href="./eee.html">Home</a>
        <a id="Event Link" href="./eee.html">Events</a>
        <a id="Friends Link" href="./eee.html">Friends</a>
        <div id="Search bar">
          <input type="text" placeholder="search"></input>
        </div>
        <a id="Profile" href="./eee.html">Profile</a>
      </div>
    )
  }
}
