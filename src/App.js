import React from 'react';
import logo from './logo.svg';
import './App.css';
import Event from "./components/Event"
import NavBar from "./components/NavBar"
import Friend from "./components/Friend"
import Footer from './components/Footer';
import MyFeed from './components/MyFeed';


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="Row Flow">
        <div id="Event Section">
          <MyFeed />
        </div>

        <div id="Sidebar">
          <h1>People you should know</h1>
          <Friend name="Jasmine" source="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/face-wash-2-1561136582.jpg?resize=480:*" interests={["Music", "Singing", "Dancing"]} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
