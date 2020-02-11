import React, { Component } from 'react'
import Event from "./Event"
export default class MyFeed extends Component {
  state = {
    loading: true,
    events: null,
    error: false

  }
  componentDidMount() {
    fetch("https://my-json-server.typicode.com/morantaf/react-project/events")
      .then(response => response.json())
      .then(data =>
        this.setState({
          loading: false,
          events: data

        }))
  }
  render() {
    const { events, loading, error } = this.state
    if (this.state.loading) {
      return <p>"Loading"</p>;
    } else if (this.state.error) {
      return <div>Something went wrong, refresh the page.</div>;
    } else {
      return (
        <div>
          {events.map(event => {
            return (

              <Event title={event.title} decription={event.decription}
                source={event.img} address={event.address} />
            );
          })}
        </div>
      );
    }
  }
}