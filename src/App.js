import React from 'react';
import './App.css';
import NavBar from "./components/NavBar"
import Footer from './components/Footer';
import MyFeed from './components/MyFeed';
import Sidebar from './components/Sidebar';
import "./components/Event.css"
import { Route } from "react-router-dom"
import MainPage from './MainPage'
import EventPage from './components/EventPage'


function App() {
  return (
    <div className="App">
      <NavBar />


      <Route exact path="/" component={MainPage} />

      <Route exact path="/events" component={MyFeed} />
      <Route path="/events/:eventId" component={EventPage} />
      <Route exact path="/friends" component={Sidebar} />

      <Footer />
    </div>
  );
}

export default App;
