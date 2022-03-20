import React, {Component} from 'react'
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import Title from "./components/Title/Title"
import About from "./components/About/About"
import background from './images/background.png'

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Title></Title>
        <About></About>
    </div>
  );
}

export default App;
