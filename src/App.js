import React from 'react';
import logo from './logo.svg';
import './App.css';
import Event from "./components/Event"
import NavBar from "./components/NavBar"
import Friend from "./components/Friend"
import Footer from './components/Footer';
import MyFeed from './components/MyFeed';
import Sidebar from './components/Sidebar';
import "./components/Events.css"

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="App-row">
        <div className="App-events">
          <MyFeed />
        </div>

        <div className="App-sidebar">
          <Sidebar />

        </div>



      </div>
      <Footer />
    </div>
  );
}

export default App;
