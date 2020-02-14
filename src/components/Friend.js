import React, { Component } from 'react'
import "./Friend.css"
export default class Friend extends Component {



  render() {
    return (
      <div className="square">
        <div className="content">
          <div className="table">
            <div className="table-cell">
              <img className="rs" src={this.props.img} />
              <h4 className="name">{this.props.name}</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
