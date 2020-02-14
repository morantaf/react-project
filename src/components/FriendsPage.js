import React, { Component } from 'react'

export default class FriendsPage extends Component {

  state = {
    friends: {}
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
    return (
      <div>
        <h1>My friends</h1>

      </div>
    )
  }
}
