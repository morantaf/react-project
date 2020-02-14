import React, { Component } from 'react'
import Friend from './Friend'

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
        {this.state.friends.map(friend => {
          <Friend name={person.name} source={person.img} interests={person.interests} />
        })}

      </div>
    )
  }
}
