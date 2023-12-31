import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import Axios from 'axios'

export default function SingleStaffPage() {

  const navigate = useNavigate()

  const { staffno, fname, lname, email, phone, salary } = useParams()

  const [inform, setInform] = useState({ email: email, phone: phone, salary: salary, staffno: staffno, submitted: false })

  let errormessage = '';

  const handleSubmit = () => {
    console.log("updating")
    Axios.put('/api/dhstaff/update', inform)
      .then(setInform({ ...inform, submitted: true })).catch(err => {
        console.log('failed');
        console.log("updated")
      })

    setTimeout(() => {
      navigate("../mystaffs")
    }, 1000)
  }
  useEffect(

    () => {
      setInform({ ...inform, submitted: false })

    }, [inform.email, inform.phone, inform.salary])



  return (
    <div>
      <h2>Updating {fname} {lname}'s information:</h2><br />

      <form action="">
        <input type="text" value={inform.staffno} style={{ display: 'none' }} onChange={(e) => { setInform({ ...inform, email: e.target.value }) }}/>
        <label htmlFor="email" className="update-form-input">Email</label>
        <input type="text" value={inform.email} onChange={(e) => { setInform({ ...inform, email: e.target.value }) }} /><br />
        <label htmlFor="phone" className="update-form-input">Phone</label>
        <input type="text" value={inform.phone} onChange={(e) => { setInform({ ...inform, phone: e.target.value }) }} /><br />
        <label htmlFor="salary" className="update-form-input">Salary</label>
        <input type="number" value={inform.salary} onChange={(e) => { setInform({ ...inform, salary: e.target.value }) }} /><br /><br />
        <div><button type='button' onClick={handleSubmit}>Save</button></div>
      </form>
      <div className='reminder'>{inform.submitted == true ? <p style={{ color: 'green', fontFamily: 'bold' }}>&nbsp;&nbsp;&nbsp;INFORMATION HAS BEEN UPDATED</p> : <pre style={{ color: 'red' }}>&nbsp;&nbsp;&nbsp;Hit 'Save' to update</pre>}</div>
      <br />
      <NavLink to='http://localhost:5173/mystaffs'><div>Back to employees list</div></NavLink>

    </div>
  )
}
