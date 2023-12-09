import React from 'react'
import {NavLink, Outlet , Routes, Route} from 'react-router-dom'
import './loggedin.css'
import AddNewStaff from './staffs/AddNewStaff'
import ClientMainMenu from './clients/ClientMainMenu'
import BranchMainMenu from './branches/BranchMainMenu'
import Mystaffs from './staffs/Mystaffs'
import SingleStaffPage from './staffs/SingleStaffPage'

export default function Loggedin() {
  return (
    <main id='body'><div className='navbar'> 
    <h3>Dashboard</h3>
    <NavLink to="mystaffs"><p>Staff Main Menu</p></NavLink> 
    <NavLink to='branchMainMenu'><p>Branch Main Menu</p></NavLink>
    <NavLink to="clientMainMenu"><p>Client Main Menu</p></NavLink>
    </div>
    <div className='content'>
        {/* <Outlet/> */}
        <Routes>
          <Route index element={<Mystaffs/>}/>
          <Route path='branchMainMenu' element={<BranchMainMenu/>}/>
          <Route path='clientMainMenu' element={<ClientMainMenu/>}/>
          <Route path='hirenewstaff' element={<AddNewStaff />}/>
          <Route path='mystaffs' element={<Mystaffs/>}/>
          <Route exact path='item' element={<SingleStaffPage/>} />
          <Route path='item/:staffno/:fname/:lname/:email/:phone/:salary' element={<SingleStaffPage />} />
        </Routes>
    </div>
    </main>
  )
}
