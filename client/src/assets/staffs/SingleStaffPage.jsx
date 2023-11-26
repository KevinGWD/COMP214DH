import React, { useState , useContext, useEffect} from 'react'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import Axios from 'axios'

export default function SingleStaffPage() {

     const{staffno, fname, lname, email, phone, salary}=useParams()

       const [inform, setInform]=useState({email:email, phone:phone, salary:salary, staffno:staffno,submitted:false})

       let errormessage='';

        const handleSubmit=()=>{
          console.log("updating")
          setInform({...inform, submitted:true})
            Axios.put('/api/dhstaff/update',inform)
           .then(inform.submitted==true).catch(err=>{
             console.log('failed');
             console.log("updated")
           }) 
          
             alert(`${fname} ${lname}'s information has been updated`)
           }

          
       // }
      useEffect(

      ()=>{
        setInform({...inform, submitted:false})
    
    },[inform.email,inform.phone,inform.salary])



  return (
    <div>
      <h2>Updating {fname} {lname}'s information:</h2><br />
      
      <form action="">{/* need submit data */}
        <input type="text" value={inform.staffno} style={{display:'none'}}/>
        <label htmlFor="email" className="update-form-input">Email</label>
        <input type="text" value={inform.email} onChange={(e)=>{setInform({...inform, email:e.target.value})}}/><br />
        <label htmlFor="phone" className="update-form-input">Phone</label>
        <input type="text" value={inform.phone} onChange={(e)=>{setInform({...inform, phone:e.target.value})}}/><br />
        <label htmlFor="salary" className="update-form-input">Salary</label>
        <input type="number" value={inform.salary} onChange={(e)=>{setInform({...inform, salary:e.target.value})}}/><br /><br />
        <button type='button' onClick={handleSubmit}>Save</button>{inform.submitted==true? <pre style={{color:'green', fontFamily:'bold'}}>INFORMATION HAS BEEN UPDATED</pre>:<pre style={{color:'red'}}>Hit 'Save' to update</pre>}
      </form>
        <br />
        <NavLink to='/loggedin/mystaffs'><div>Back to employees list</div></NavLink>

    </div>
  )
}
