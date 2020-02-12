import React, { Component } from 'react'
import "./Events.css"

export default class Event extends Component {
  state = {
    value: true,
  };

  handleClick = () => {
    if (this.state.value) {
      this.props.incrementAttendees(this.props.id)
      console.log("increment", this.state.value)
      this.setState({
        value: false
      })
    } else {
      this.props.decrementAttendees(this.props.id)
      console.log("decrement", this.state.value)
      this.setState({
        value: true

      })
    }
  }

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
        <p>{this.props.attendees}</p>
        <button onClick={this.handleClick}>Join</button>

      </div>
    )
  }
}
