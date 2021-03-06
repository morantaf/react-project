import React, { Component } from 'react'
import Event from "./Event"
export default class MyFeed extends Component {
  state = {
    loading: true,
    events: [],
    error: false

  }
  componentDidMount() {
    fetch("https://my-json-server.typicode.com/morantaf/react-project/data")
      .then(response => response.json())
      .then(data =>
        this.setState({
          loading: false,
          events: data

        }))
  }
  modifyAttendees = (id, increment) => {

    const updatedEvents = this.state.events.map(event => {
      if (event.id === id) {
        return increment ? { ...event, attendees: event.attendees + 1 } : { ...event, attendees: event.attendees - 1 }
      } else { return event }
    })
    this.setState({
      //value: false,
      events: updatedEvents
    })
  };

  renderEvent = (event) => {
    return (
      < Event title={event.title}
        decription={event.decription}
        source={event.img}
        address={event.address}
        attendees={event.attendees}
        id={event.id}
        key={event.id}
        modifyAttendees={this.modifyAttendees} />
    )
  }

  render() {

    const events_copy = [...this.state.events]
    events_copy.sort((a, b) => b.attendees - a.attendees)
    if (this.state.loading) {
      return <p>"Loading"</p>;
    } else if (this.state.error) {
      return <div>Something went wrong, refresh the page.</div>;
    } else {
      return (
        <div>
          {events_copy.map(this.renderEvent)}
        </div>
      );
    }
  }
}