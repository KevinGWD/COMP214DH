import { useState } from 'react'
import { NavLink, Route, BrowserRouter, Routes, Outlet, RouterProvider } from 'react-router-dom'
import './App.css'
// import Router from './main'
import Loggedin from './assets/Loggedin'


function App() {

  return (
    <>

<nav class="navbar navbar-expand-sm navbar-dark">
  <div class="container-fluid">
  <a class="navbar-brand" href="http://localhost:5173/"><h3> <i className='fa fa-home'></i>Dream Home Real Estate</h3> </a>
    <ul class="navbar-nav">
      <li class="nav-item">
      <a class="nav-link" href="http://localhost:5173/mystaffs"><h3>Staff Main Menu</h3></a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="http://localhost:5173/branchMainMenu"><h3>Branch Main Menu</h3></a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="http://localhost:5173/clientMainMenu"><h3>Client Main Menu</h3></a>
      </li>
      </ul>
  </div>
</nav>
            <div id="outlet">
        <Routes>
          <Route path='/*' element={<Loggedin />} />
          <Route path='/' element={<Loggedin />} />
        </Routes>
      </div>
    </>
  )
}

export default App
