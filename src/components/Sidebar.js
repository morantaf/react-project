import React, { Component } from 'react'
import People from "./People"
import Filter from './Filter'

export default class Sidebar extends Component {
  state = {
    loading: true,
    people: [],
    filteredPeople: [],
    filtered: false,
    error: false,

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

  filterPeople = (option) => {
    const peopleInterests = this.state.people.map(person => [person.id, person.interests])

    const filteredPeople = peopleInterests.filter(filteredPerson => filteredPerson[1].includes(option))

    const updatedPeople = this.state.people.filter(person => filteredPeople.map(filteredPerson => filteredPerson[0]).includes(person.id))

    if (option !== "") {
      this.setState({
        filteredPeople: updatedPeople,
        filtered: true

      })
    }
    else {
      this.setState({
        filtered: false
      })
    }
  }



  render() {
    const { people, filteredPeople, filtered } = this.state
    console.log("I render")
    if (filtered) {

      return (<div>
        <h1>I filter</h1>
        <h1>People you should Know</h1>
        <Filter filterPeople={this.filterPeople} filtered={this.state.filtered} />

        {filteredPeople.map(person => {
          return (

            <People name={person.name} source={person.img} interests={person.interests} key={person.id} />
          );
        })}
      </div>)

    } else {
      return (

        <div>
          <h1>I don't filter</h1>
          <h1>People you should Know</h1>
          <Filter filterPeople={this.filterPeople} filtered={this.state.filtered} />

          {people.map(person => {
            return (

              <People name={person.name} source={person.img} interests={person.interests} key={person.id} />
            );
          })}
        </div>
      );
    }
  }
}

