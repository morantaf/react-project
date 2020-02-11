import React, { Component } from 'react'

export default class Event extends Component {
  state = {
    value: true,
    counter: 0
  };
  // ...
  increment = () => {
    this.setState({
      value: false,
      counter: this.state.counter + 1

    });
  };
  decrement = () => {
    this.setState({
      value: true,
      counter: this.state.counter - 1

    });
  };

  ada = () => {
    if (this.state.value) {
      return (<div>
        <p>{this.state.counter}</p>
        <button onClick={this.increment}>Join</button>
      </div>)
    }
    else {
      return (<div>
        <p>{this.state.counter}</p>
        <button onClick={this.decrement}>Leave</button>
      </div>
      );
    }
  }

  render() {
    return (
      <div className="Event">
        <div className="Event Header">
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
        </div>
        <div className="Picture">
          <img src={this.props.source} />
        </div>
        <div className="Event Footer">
          <h4>{this.props.address}</h4>
          <div className="Ratings"></div>
          <button>More</button>
        </div>
        {this.ada()}

      </div>
    )
  }
}
