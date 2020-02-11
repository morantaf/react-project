import React, { Component } from 'react'

export default class Events extends Component {
  render() {
    return (
      <div className="Event">
        <div className="Event Header">
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
        </div>
        <div className="Picture">
          <img src={this.props.source} />
        </div>
        <div className="Event Footer">
          <h4>{this.props.address}</h4>
          <div className="Ratings"></div>
          <button>More</button>
        </div>

      </div>
    )
  }
}
