import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, BrowserRouter, HashRouter} from 'react-router-dom'
import Home from './assets/Home.jsx'
import Login from './assets/Login.jsx'
import Signup from './assets/Signup.jsx'
import App from './App.jsx'
import './index.css'
import Loggedin from './assets/Loggedin.jsx'
import BranchMainMenu from './assets/branches/BranchMainMenu.jsx'
import Mypshop from './assets/clients/ClientMainMenu.jsx'
import Mystaffs from './assets/staffs/Mystaffs.jsx'

// const router=createBrowserRouter([
//   {
//     path: '/',
//     element: <App/>,
//     children:[
//       {
//         path: '/login',
//         element: <Login/>
//       },
//       {
//         path: '/signup',
//         element: <Signup/>
//       },
//       {
//         path: '/loggedin',
//         element: <Loggedin/>,
//         children:[
//           {
//             path:'/loggedin/branchMainMenu',
//             element:<BranchMainMenu/>
//           },
//           {            
//             path:'/loggedin/clientMainMenu',
//             element:<Mypshop />},
//           {            
//             path:'/loggedin/mystaffs',
//             element:<Mystaffs/>}
//         ]
//       }
//     ]
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
   <BrowserRouter>
    <React.StrictMode>
    <App/>
  </React.StrictMode>  
  </BrowserRouter>
)

// export default router
