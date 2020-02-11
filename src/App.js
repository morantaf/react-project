import React from 'react';
import logo from './logo.svg';
import './App.css';
import Events from "./components/Events"
import NavBar from "./components/NavBar"
import Friends from "./components/Friends"
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="Row Flow">
        <div id="Event Section">
          <Events title="Title " decription="Description"
            source="https://learntocodetogether.nl/assets/team.svg" address="address" />
          <Events title="Title " decription="Description"
            source="https://learntocodetogether.nl/assets/team.svg" address="address" />
          <Events title="Title " decription="Description"
            source="https://learntocodetogether.nl/assets/team.svg" address="address" />
        </div>

        <div id="Sidebar">
          <h1>People you should know</h1>
          <Friends name="Jean" source="https://learntocodetogether.nl/assets/team.svg" interest1="Music" interest2="Singing" interest3="Dancing" />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
