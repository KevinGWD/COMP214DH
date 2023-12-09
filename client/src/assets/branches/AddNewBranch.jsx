import React, { useState , useEffect} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Axios from 'axios'

import './addnewbranch.css'

export default function AddNewbranch() {
       const navigate=useNavigate()
       let errorMessage=''

       const [inform, setInform]=useState({branchno:'',street:'', city:'',postcode:''})
  
       const {branchno, street, city,postcode}=inform;
    
       const handleSubmit=()=>{

        Axios.post('/api/dhbranch/newbranch',inform)
       .then((data)=> {alert("New Branch Added")}).catch(error=>{
         console.log('failed');
         errorMessage=error.message
         return
       })
       setTimeout(() => {
        navigate("../branchMainMenu")
      }, 1000)
       }
       
      React.useEffect(()=>{
      },[branchno, street, city,postcode]
        )



  return (
    <div className='addNewbranch'>
      <h2>Hiring a new branch</h2><br />
      
      <form action=''>

      <label htmlFor="branchNo" className="hire-form-input">Branch No.</label>
      <input type="text" id='branchNo' value={inform.branchno} onChange={(e)=>{setInform({...inform, branchno:e.target.value})}}/>

        <label htmlFor="street" className="hire-form-input">street</label>
        <input type="text" id='street' value={inform.street} onChange={(e)=>{setInform({...inform, street:e.target.value})}}/>

        <label htmlFor="city" className="hire-form-input">city</label>
        <input type="text" id='city' value={inform.city} onChange={(e)=>{setInform({...inform, city:e.target.value})}}/>
        
        <label htmlFor="postcode" className="hire-form-input">postcode</label>
        <input type="text" id='postcode' value={inform.postcode} onChange={(e)=>{setInform({...inform, postcode:e.target.value})}}/>
        
        <button type="button" onClick={handleSubmit} className='btn btn-lg btn-primary'> <i className='fa fa-cloud-upload'></i>  Submit</button>
      </form>
         <p>{errorMessage}</p>
        <br />
        <NavLink to='http://localhost:5173/branchMainMenu'><span>Back to branch list</span></NavLink>

    </div>
  )
}