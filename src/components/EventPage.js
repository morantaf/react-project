import React, { Component } from 'react'
import "./Event.css"

export default class EventPage extends Component {
  state = {
    event: {}
  }
  componentDidMount = () => {
    const eventId = this.props.match.params.eventId
    fetch(`https://my-json-server.typicode.com/morantaf/react-project/data/${eventId}`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          loading: false,
          event: data
        }))
  }

  render() {
    console.log(this.props)
    return (

      <div className="event">
        <div className="eventHeader">
          <h2>{this.state.event.title}</h2>
          <p>{this.state.event.description}</p>
        </div>
        <div className="picture">
          <img src={this.state.event.img} />
        </div>
        <div className="eventFooter">
          <h4>{this.state.event.address}</h4>
          <div className="ratings"></div>
          <p> <b>Participants</b> :{this.state.event.attendees}</p>
          <button className="joinButton" onClick={this.handleClick}>Join</button>
        </div>


      </div>
    )
  }
}
