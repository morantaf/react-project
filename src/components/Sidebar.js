import React, { Component } from 'react'
import Friend from "./Friend"

export default class Sidebar extends Component {
  state = {
    loading: true,
    friends: null,
    error: false

  }
  componentDidMount() {
    fetch("https://my-json-server.typicode.com/morantaf/react-project/friends")
      .then(response => response.json())
      .then(data =>
        this.setState({
          loading: false,
          friends: data

        }))
  }
  render() {
    const { friends, loading, error } = this.state
    if (loading) {
      return <p>"Loading"</p>;
    } else if (error) {
      return <div>Something went wrong, refresh the page.</div>;
    } else {
      return (

        <div>
          <h1>People you should Know</h1>
          {friends.map(friend => {
            return (

              <Friend name={friend.name} source={friend.img} interests={friend.interests} />
            );
          })}
        </div>
      );
    }
  }
}
