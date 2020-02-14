import React, { Component } from 'react'
import PropTypes from "prop-types"
export default class Filter extends Component {

  state = {
    value: ""
  }

  static propTypes = {
    filterPeople: PropTypes.func.isRequired
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.filterPeople(this.state.value)
  }

  handleChange = (event) => {
    //this.props.filterPeople(this.state.value)
    this.setState({
      value: event.target.value
    })
  }

  render() {
    //if (this.state.value!=="")
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <label htmlFor="filter-interests">Filter by interests:

        <select className="filter-interests" value={this.state.value} onChange={this.handleChange}>
              <option value="">No filter</option>
              <option value="Music">Music</option>
              <option value="Dancing">Dancing</option>
              <option value="Singing">Singing</option>
            </select>
          </label>

          <input type="submit" value="Filter" />

        </form >
      </div>
    )
  }
}
