import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import { Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';


function App() {
  return (
    <div class="font-days-one">
      <NavBar/>
      <Home/>
      <About/>
      <Projects/>
    </div>
  )
}

export default App
