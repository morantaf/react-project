import React, { Component } from 'react'

export default class Friend extends Component {
  render() {
    return (
      <div className="FriendSection">
        <p>{this.props.name}</p>
        <img src={this.props.source} />
        {this.props.interests.map(interest =>
          <span>{interest}</span>)}

      </div>
    )
  }
}
