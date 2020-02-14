import React, { Component } from 'react'
import Friend from "./Friend"

export default class Sidebar extends Component {
  state = {
    loading: true,
    people: null,
    error: false

  }
  componentDidMount() {
    fetch("https://my-json-server.typicode.com/morantaf/react-project/people")
      .then(response => response.json())
      .then(data =>
        this.setState({
          loading: false,
          people: data

        }))
  }
  render() {
    const { people, loading, error } = this.state
    if (loading) {
      return <p>"Loading"</p>;
    } else if (error) {
      return <div>Something went wrong, refresh the page.</div>;
    } else {
      return (

        <div>
          <h1>People you should Know</h1>
          {people.map(person => {
            return (

              <Friend name={person.name} source={person.img} interests={person.interests} />
            );
          })}
        </div>
      );
    }
  }
}
