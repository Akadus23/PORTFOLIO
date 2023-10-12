import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import { Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';


function App() {
  return (
    <div class=" bg-[#04052E] w-[100vw] h-[100vh] ">
      <NavBar/>
      <Home/>
    </div>
  )
}

export default App
