import React, { useState , useEffect} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Axios from 'axios'

import './addnewstaff.css'

export default function AddNewStaff() {
       const navigate=useNavigate()
       let errorMessage=''

       const [inform, setInform]=useState({staffNo:'',firstname:'', lastname:'',position:'',sex:'',DOB:'', salary:0, branchNo:'', telephone:'',mobile:'',email:''})
  
       const {staffNo, firstname, lastname,position,sex,DOB, salary,branchNo, telephone,mobile,email}=inform;
    
       const handleSubmit=()=>{

        Axios.post('/api/dhstaff/newstaff',inform)
       .then(
        (data)=> {alert("New Staff Added")}).catch(error=>{
         console.log('failed');
         errorMessage=error.message
         return
       })
       setTimeout(() => {
        navigate("/loggedin")
      }, 1000)
       }
       
      React.useEffect(()=>{
      },[staffNo, firstname, lastname,position,sex,DOB, salary,branchNo, telephone,mobile,email]
        )



  return (
    <div className='addNewStaff'>
      <h2>Hiring a new staff</h2><br />
      
      <form action=''>

      <label htmlFor="staffNo" className="hire-form-input" aria-readonly>Staff No.</label>
        <input type="text" id='staffNo' value={inform.staffNo} onChange={(e)=>{setInform({...inform, staffNo:e.target.value})}}/>

        <label htmlFor="firstname" className="hire-form-input">Firstname</label>
        <input type="text" id='firstname' value={inform.firstname} onChange={(e)=>{setInform({...inform, firstname:e.target.value})}}/>

        <label htmlFor="lastname" className="hire-form-input">Lastname</label>
        <input type="text" id='lastname' value={inform.lastname} onChange={(e)=>{setInform({...inform, lastname:e.target.value})}}/>
        
        <label htmlFor="position" className="hire-form-input">Position</label>
        <input type="text" id='position' value={inform.position} onChange={(e)=>{setInform({...inform, position:e.target.value})}}/>
        
        <label htmlFor="sex" className="hire-form-input">Sex </label>
        <input type="text" id='sex' value={inform.sex} onChange={(e)=>{setInform({...inform, sex:e.target.value})}}/>
        
        <label htmlFor="dob" className="hire-form-input">DOB</label>
        <input type='text' id='dob'  placeholder='yyyy-mm-dd' value={inform.DOB} onChange={(e)=>{setInform({...inform, DOB:e.target.value})}}/>
        
        <label htmlFor="salary" className="hire-form-input">Salary</label>
        <input type="number" id='salary' value={inform.salary} onChange={(e)=>{setInform({...inform, salary:e.target.value})}}/>

        <label htmlFor="branchNo" className="hire-form-input">Branch No</label>
        <select id='branchNo' value={inform.branchNo} onChange={(e)=>{setInform({...inform, branchNo:e.target.value})}}>
          <option value="B002">Choose one</option>
          <option value="B002">B002</option>
          <option value="B003">B003</option>
          <option value="B004">B004</option>
          <option value="B005">B005</option>
          <option value="B007">B007</option>
          </select><br />
        
        <label htmlFor="telephone" className="hire-form-input">Telephone</label>
        <input type="text" id='telephone' value={inform.telephone} onChange={(e)=>{setInform({...inform, telephone:e.target.value})}}/>
        
        <label htmlFor="mobile" className="hire-form-input">Mobile</label>
        <input type="text" id='mobile' value={inform.mobile} onChange={(e)=>{setInform({...inform, mobile:e.target.value})}}/>
        
        <label htmlFor="email" className="hire-form-input">Email</label>
        <input type="text" id='email' value={inform.email} onChange={(e)=>{setInform({...inform, email:e.target.value})}}/>
        
        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
         <p>{errorMessage}</p>
        <br />
        <NavLink to='/loggedin/mystaffs'><span>Back to employees list</span></NavLink>

    </div>
  )
}