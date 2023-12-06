import { useState } from 'react'
import { NavLink, Route, BrowserRouter, Routes, Outlet, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './assets/Login'
import Signup from './assets/Signup'
import Home from './assets/Home'
// import Router from './main'
import Loggedin from './assets/Loggedin'


function App() {

  return (
    <>
      <div className="menu-header">
        <div >
          <span>
            <NavLink to="/login"><button className='menu-button'>Login</button></NavLink>
          </span>
          <span>
            <NavLink to="/signup"><button className='menu-button'>Signup</button></NavLink>
          </span>
        </div>
        <div className='menu-title'><h1>Dream Home Real Estate Management System</h1></div>
      </div>
      <div id="outlet">
        <Routes>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='loggedin/*' element={<Loggedin />} />
          <Route path='/' element={<Login />} />
        </Routes>
      </div>
    </>
  )
}

export default App
