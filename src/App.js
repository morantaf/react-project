import React from 'react';
import './App.css';
import NavBar from "./components/NavBar"
import Footer from './components/Footer';
import MyFeed from './components/MyFeed';
import "./components/Event.css"
import { Route } from "react-router-dom"
import MainPage from './MainPage'
import EventPage from './components/EventPage'
import FriendsPage from './components/FriendsPage';
import SignupForm from './components/SignupForm';


function App() {
  return (
    <div className="App">
      <NavBar />


      <Route exact path="/" component={MainPage} />

      <Route exact path="/events" component={MyFeed} />
      <Route path="/events/:eventId" component={EventPage} />
      <Route exact path="/friends" component={FriendsPage} />

      <div className="footer">
        <Footer />
      </div>
    </div >
  );
}

export default App;
