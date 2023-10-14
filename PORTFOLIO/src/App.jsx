import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import { Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';


function App() {
  return (
    <div class="font-days-one">
      <NavBar/>
      <Home/>
    </div>
  )
}

export default App
