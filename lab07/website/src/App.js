import React, {Component} from 'react'
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import Title from "./components/Title/Title"
import Contact from "./components/Contact/Contact"
import About from "./components/About/About"
import background from './images/background.png'
import Review from './components/Review/Review'

import { BrowserRouter, Route, Switch } from 'react-router-dom';


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
        </Switch>
          <Route path="/review">
              <Review/>
          </Route>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
