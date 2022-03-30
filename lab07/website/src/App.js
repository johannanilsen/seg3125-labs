import React, {Component} from 'react'
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import Title from "./components/Title/Title"
import Contact from "./components/Contact/Contact"
import About from "./components/About/About"
import Book_room from './components/Book_room/Book_room'
import background from './images/background.png'
import Review from './components/Review/Review'
import Feedback from './components/Feedback/Feedback'

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TravelPackages from './components/TravelPackages/TravelPackages'


function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <BrowserRouter>
        <Switch>
          <Route exact path="/">
              <Title></Title>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/contact">
              <Contact/>
          </Route>

          <Route path="/book-room">
              <Book_room/>
          </Route>

          <Route path="/travel-packages">
              <TravelPackages />
          </Route>

        </Switch>
          <Route path="/review">
              <Review/>
          </Route>
          <Route path="/feedback">
              <Feedback/>
          </Route>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
