import React, { Component } from 'react'
import "./Friend.css"

export default class Friend extends Component {
  render() {
    return (
      <div className="FriendSection">
        <h1>{this.props.name}</h1>
        <img className="friend-image" src={this.props.source} />
        {this.props.interests.map(interest =>
          <span className="interests">{interest}  </span>)}

      </div>
    )
  }
}
