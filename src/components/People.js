import React, { Component } from 'react'
import "./People.css"

export default class People extends Component {
  state = {
    added: false
  }

  togglePeople = () => {
    this.setState({
      added: !this.state.added
    })
  }



  render() {
    const imgUrl = this.state.added ? "https://static.thenounproject.com/png/160062-200.png" : "https://static.thenounproject.com/png/446527-200.png"
    return (
      <div className="peopleSection">
        <h1>{this.props.name}</h1>
        <img className="people-image" src={this.props.source} />
        <div className="interestSection">
          <h3>Common interests</h3>
          {this.props.interests.map(interest =>
            <span className="interests" key={this.props.name + interest}>{interest}  </span>)}
        </div>
        <img className="peopleButton" onClick={this.togglePeople} src={imgUrl}></img>

      </div>
    )
  }
}
