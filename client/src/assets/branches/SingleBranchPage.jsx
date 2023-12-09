import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import Axios from 'axios'

export default function SingleBranchPage() {

  const navigate = useNavigate()

  const { branchno, street, city, postcode,} = useParams()

  const [inform, setInform] = useState({ branchno: branchno, street: street, city: city, postcode: postcode, submitted: false })

  let errormessage = '';

  const handleSubmit = () => {
    console.log("updating")
    Axios.put('/api/dhbranch/update', inform)
      .then(setInform({ ...inform, submitted: true })).catch(err => {
        console.log('failed');
        console.log("updated")
      })

    setTimeout(() => {
      navigate("../BranchMainMenu")
    }, 1000)
  }
  useEffect(

    () => {
      setInform({ ...inform, submitted: false })

    }, [inform.postcode, inform.street, inform.city])



  return (
    <div>
      <h2>Updating {branchno}'s information:</h2><br />

      <form action="">
        <input type="text" value={inform.branchno} style={{ display: 'none' }} onChange={(e) => { setInform({ ...inform, postcode: e.target.value }) }}/>
        <label htmlFor="postcode" className="update-form-input">postcode</label>
        <input type="text" value={inform.postcode} onChange={(e) => { setInform({ ...inform, postcode: e.target.value }) }} /><br />
        <label htmlFor="street" className="update-form-input">street</label>
        <input type="text" value={inform.street} onChange={(e) => { setInform({ ...inform, street: e.target.value }) }} /><br />
        <label htmlFor="city" className="update-form-input">city</label>
        <input type="text" value={inform.city} onChange={(e) => { setInform({ ...inform, city: e.target.value }) }} /><br /><br />
        <div><button type='button' onClick={handleSubmit}>Save</button></div>
      </form>
      <div className='reminder'>{inform.submitted == true ? <p style={{ color: 'green', fontFamily: 'bold' }}>&nbsp;&nbsp;&nbsp;INFORMATION HAS BEEN UPDATED</p> : <pre style={{ color: 'red' }}>&nbsp;&nbsp;&nbsp;Hit 'Save' to update</pre>}</div>
      <br />
      <NavLink to='http://localhost:5173/BranchMainMenu'><div>Back to branch list</div></NavLink>

    </div>
  )
}
