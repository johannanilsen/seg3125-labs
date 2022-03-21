import React, {Component} from 'react'
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import Title from "./components/Title/Title"
import Contact from "./pages/conatct"
import About from "./components/About/About"
import background from './images/background.png'

import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Title></Title>
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact/>
            

          </Route>
        </Switch>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
