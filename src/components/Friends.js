import React, { Component } from 'react'

export default class Friends extends Component {
  render() {
    return (
      <div className="Friend Section">
        <img src={this.props.source} />
        <p>{this.props.name}</p>
        <span>{this.props.interest1}</span>
        <span>{this.props.interest2}</span>
        <span>{this.props.interest3}</span>
      </div>
    )
  }
}
