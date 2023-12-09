import React, { useState , useContext, useEffect} from 'react'
import { useParams } from 'react-router'
import { NavLink, useNavigate } from 'react-router-dom'
import Axios from 'axios'

export default function SingleclientPage() {
  const navigate = useNavigate()
      const{clientno, fname, lname, telno, street, city, email, preftype, maxrent}=useParams()

      const [inform, setInform]=useState({clientno:clientno,fname:fname, lname:lname,telno:telno,street:street,city:city, email:email, preftype:preftype, maxrent:maxrent, submitted:false})
{/*     //clientno telno, street, city, email, preftype, maxrent*/}
      let errormessage='';

        const handleSubmit=()=>{
          console.log("updating")
          setInform({...inform, submitted:true})
            Axios.put('/api/dhclient/update',inform)
           .then(inform.submitted==true).catch(err=>{
             console.log('failed');
             console.log("updated")
             console.log("informed: " + inform)
           }) 

             alert(`${fname} ${lname}'s information has been updated`)
             setTimeout(() => {
              navigate("../clientmainmenu")
            }, 1000)
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
        <label htmlFor="clientno" className="update-form-input">Client ID number:</label>
        <input type="text" value={inform.clientno}  onChange={(e)=>{setInform({...inform, clientno:e.target.value})}}/>
        
        <label htmlFor="fname" className="update-form-input">First name</label>
        <input type="text" value={inform.fname}     onChange={(e)=>{setInform({...inform, fname:e.target.value})}}/>

        <label htmlFor="lname" className="update-form-input">Last name</label>
        <input type="text" value={inform.lname}     onChange={(e)=>{setInform({...inform, lname:e.target.value})}}/>

        <label htmlFor="email" className="update-form-input">Telephone Number</label>
        <input type="text" value={inform.telno}     onChange={(e)=>{setInform({...inform, telno:e.target.value})}}/>
        
        <label htmlFor="email" className="update-form-input">Street address:</label>
        <input type="text" value={inform.street}    onChange={(e)=>{setInform({...inform, street:e.target.value})}}/>
        
        <label htmlFor="email" className="update-form-input">City:</label>
        <input type="text" value={inform.city}      onChange={(e)=>{setInform({...inform, city:e.target.value})}}/>
        
        <label htmlFor="email" className="update-form-input">E-mail:</label>
        <input type="text" value={inform.email}     onChange={(e)=>{setInform({...inform, none:e.target.value})}}/>
        
        <label htmlFor="email" className="update-form-input">Preferred House Type:</label>
        <input type="text" value={inform.preftype}  onChange={(e)=>{setInform({...inform, preftype:e.target.value})}}/>
        
        <label htmlFor="phone" className="update-form-input">Maximum Rent:</label>
        <input type="text" value={inform.maxrent}   onChange={(e)=>{setInform({...inform, maxrent:e.target.value})}}/><br />
        <br/>
        <br/>
        <button type='button' onClick={handleSubmit}>Save</button>{inform.submitted==true? <pre style={{color:'green', fontFamily:'bold'}}>INFORMATION HAS BEEN UPDATED</pre>:<pre style={{color:'red'}}>Hit 'Save' to update</pre>}
      </form>
        <br />
        <NavLink to='http://localhost:5173/clientmainmenu'><div>Back to client list</div></NavLink>

    </div>
  )
}
