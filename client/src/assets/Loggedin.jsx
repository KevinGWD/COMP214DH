import React from 'react'
import {NavLink, Outlet , Routes, Route} from 'react-router-dom'
import './loggedin.css'
import AddNewStaff from './staffs/AddNewStaff'
import ClientMainMenu from './clients/ClientMainMenu'
import BranchMainMenu from './branches/BranchMainMenu'
import Mystaffs from './staffs/Mystaffs'
import SingleStaffPage from './staffs/SingleStaffPage'
import SingleClientPage from './clients/SingleClientPage'
import AddNewclient from './clients/AddNewClient'
import SingleBranchPage from './branches/SingleBranchPage'
import AddNewBranch from './branches/AddNewBranch'
import BranchSearch from './branches/BranchSearch.jsx'


export default function Loggedin() {
  return (
    <main id='body'>
    <div className='content'>
        {/* <Outlet/> */}
        <Routes>
          <Route index element={<Mystaffs/>}/>
          <Route path='branchMainMenu' element={<BranchMainMenu/>}/>
          <Route path='clientMainMenu' element={<ClientMainMenu/>}/>
          <Route path='hirenewstaff' element={<AddNewStaff />}/>
          <Route path='hirenewclient' element={<AddNewclient />}/>
          <Route path='addnewbranch' element={<AddNewBranch />}/>
          <Route path='mystaffs' element={<Mystaffs/>}/>
          <Route exact path='item' element={<SingleStaffPage/>} />
          <Route path='item/:staffno/:fname/:lname/:email/:phone/:salary' element={<SingleStaffPage />} />
          <Route exact path='client' element={<SingleClientPage/>} />
          <Route path='client/:clientno/:fname/:lname/:telno/:street/:city/:email/:preftype/:maxrent' element={<SingleClientPage />} />
          <Route exact path='branch' element={<SingleBranchPage/>} />
          <Route path='branch/:branchno/:street/:city/:postcode' element={<SingleBranchPage />} />
          <Route path='branch/search' element={<BranchSearch/>}><Route/>
        </Routes>
    </div>
    </main>
  )
}
