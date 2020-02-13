import React, { Component } from 'react'

import Footer from './components/Footer';
import MyFeed from './components/MyFeed';
import Sidebar from './components/Sidebar';
export default class MainPage extends Component {
  render() {
    return (
      <div>
        <div className="App-row">
          <div className="App-events">

            <MyFeed />
          </div>

          <div className="App-sidebar">
            <Sidebar />

          </div>



        </div>
      </div>
    )
  }
}
