import React, { Component } from 'react'
import "./Event.css"
import { Link } from "react-router-dom";

export default class Event extends Component {
  state = {
    value: true,
  };

  handleClick = () => {
    if (this.state.value) {
      this.props.modifyAttendees(this.props.id, true)
      console.log("increment", this.state.value)
      this.setState({
        value: false
      })
    } else {
      this.props.modifyAttendees(this.props.id, false)
      console.log("decrement", this.state.value)
      this.setState({
        value: true

      })
    }
  }

  render() {
    return (
      <div className="event">
        <div className="eventHeader">
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
        </div>
        <div className="picture-box">
          <img className="picture" src={this.props.source} />
        </div>
        <div className="eventFooters">
          <div className="eventFooter1">
            <h4>{this.props.address}</h4>
            {/* <div className="ratings"></div> */}
            <Link to={`/events/${this.props.id}`} >More</Link>
          </div>
          <div className="eventFooter2">
            <p className="participant"> <b>Participants</b> :{this.props.attendees}</p>

            <button className="participant" id="joinButton" onClick={this.handleClick}>Join</button>

          </div>

        </div>


      </div>
    )
  }
}
