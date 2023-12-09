import React, { useState , useEffect} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Axios from 'axios'

import './addnewclient.css'

export default function AddNewclient() {
      const navigate=useNavigate()
       let errorMessage=''

       const [inform, setInform]=useState({clientno:'',fname:'', lname:'',telno:'',street:'',city:'', email:'', preftype:'', maxrent:''})
  
       const {clientno, fname, lname,telno,street,city, email,preftype, maxrent}=inform;
    
       const handleSubmit=()=>{
        console.log(inform)
        Axios.post('/api/dhclient/newclient',inform)
       .then((data) => {alert("New client Added")}).catch(error=>{
         console.log('failed');
         errorMessage=error.message
       })
       setTimeout(() => {
        navigate("../clientMainMenu")
      }, 1000)
       }
       
      React.useEffect(()=>{} , [clientno, fname, lname,telno,street,city, email,preftype, maxrent,])



  return (
    <div className='addNewclient'>
      <h2 className='display-title'>Hiring a new client</h2><br />
      
      <form action=''>

      <label htmlFor="clientno" className="hire-form-input" aria-readonly>Client ID Code:</label>
        <input type="text" id='clientno' value={inform.clientno} onChange={(e)=>{setInform({...inform, clientno:e.target.value})}}/>

        <label htmlFor="fname" className="hire-form-input">Client first name:</label>
        <input type="text" id='fname' value={inform.fname} onChange={(e)=>{setInform({...inform, fname:e.target.value})}}/>

        <label htmlFor="lname" className="hire-form-input">Client last name:</label>
        <input type="text" id='lname' value={inform.lname} onChange={(e)=>{setInform({...inform, lname:e.target.value})}}/>
        
        <label htmlFor="telno" className="hire-form-input">Client telephone number:</label>
        <input type="text" id='telno' value={inform.telno} onChange={(e)=>{setInform({...inform, telno:e.target.value})}}/>
        
        <label htmlFor="street" className="hire-form-input">Client street address:</label>
        <input type="text" id='street' value={inform.street} onChange={(e)=>{setInform({...inform, street:e.target.value})}}/>
        
        <label htmlFor="city" className="hire-form-input">City of client:</label>
        <input type='text' id='city' required value={inform.city} onChange={(e)=>{setInform({...inform, city:e.target.value})}}/>
        
        <label htmlFor="email" className="hire-form-input">Client email address:</label>
        <input type="text" id='email' value={inform.email} onChange={(e)=>{setInform({...inform, email:e.target.value})}}/>

        <label htmlFor="preftype" className="hire-form-input">Preferred House Type</label>
        <input type="text" id='preftype' value={inform.preftype} onChange={(e)=>{setInform({...inform, preftype:e.target.value})}}/>
        
        <label htmlFor="maxrent" className="hire-form-input">maxrent</label>
        <input type="text" id='maxrent' value={inform.maxrent} onChange={(e)=>{setInform({...inform, maxrent:e.target.value})}}/>
        <button type="button" onClick={handleSubmit} className='btn btn-lg btn-primary'> <i className='fa fa-cloud-upload'></i> Submit</button>
      </form>
         <p>{errorMessage}</p>
        <br />
        <NavLink to='http://localhost:5173/clientMainMenu'><span>Back to employees list</span></NavLink>

    </div>
  )
}