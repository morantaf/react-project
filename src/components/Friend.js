import React, { Component } from 'react'
import "./Friend.css"

export default class Friend extends Component {
  state = {
    added: false
  }

  toggleFriend = () => {
    this.setState({
      added: !this.state.added
    })
  }



  render() {
    const imgUrl = this.state.added ? "https://static.thenounproject.com/png/160062-200.png" : "https://static.thenounproject.com/png/446527-200.png"
    return (
      <div className="friendSection">
        <h1>{this.props.name}</h1>
        <img className="friend-image" src={this.props.source} />
        <div className="interestSection">
          {this.props.interests.map(interest =>
            <span className="interests">{interest}  </span>)}
        </div>
        <img className="friendButton" onClick={this.toggleFriend} src={imgUrl}></img>

      </div>
    )
  }
}
