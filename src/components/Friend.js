import React, { Component } from 'react'

export default class Friend extends Component {
  render() {
    return (
      <div className="FriendSection">
        <p>{this.props.name}</p>
        <img src={this.props.source} />
        <span>{this.props.interest1}</span>
        <span>{this.props.interest2}</span>
        <span>{this.props.interest3}</span>

      </div>
    )
  }
}
