import { useState } from 'react'
import {NavLink, Route, BrowserRouter, Routes, Outlet, RouterProvider} from 'react-router-dom'
import './App.css'
import Login from './assets/Login'
import Signup from './assets/Signup'
import Home from './assets/Home'
// import Router from './main'
import Loggedin from './assets/Loggedin'


function App() {

  return (
    <>
    <div className="header">
      <div>logo</div>
      <div>about</div>
      <div className='buttons'>        
          <span>
            <NavLink  to="/login"><button>Login</button></NavLink>
          </span>
          <span>
            <NavLink  to="/signup"><button>Signup</button></NavLink>
          </span>
        </div>
    </div>
    <div id="outlet">
      <Routes>
        <Route path='login' element={<Login/>} />
        <Route path='signup' element={<Signup/>} />
        <Route path='loggedin/*' element={<Loggedin/>} />
        <Route path='/' element={<Login/>} />
      </Routes>
    </div>
    </>
  )
}

export default App
