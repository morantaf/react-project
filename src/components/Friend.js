import React, { Component } from 'react'

export default class Friend extends Component {
  render() {
    return (
      <div className="FriendSection">
        <img src={this.props.source} />
        <p>{this.props.name}</p>
        {this.props.interests.map(interest =>
          <span>{interest} </span>)}
      </div>
    )
  }
}
