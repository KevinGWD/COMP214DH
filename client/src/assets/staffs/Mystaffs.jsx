import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import './Mystaffs.css'

export default function Mystaffs() {

  const [staffs, setStaffs]=useState([])

  React.useEffect(()=>{
    axios('http://localhost:8081/api/dhstaff/').then(response=>{
      if (response.status===200){
        const fetchedData=response.data;
        setStaffs(fetchedData);
        console.log(fetchedData)
      }
   }).catch(err=>{

   })  
  },[])

  const handleDelete=async (staffno)=>{
    let arr=staffs.filter(function(obj){
      return obj.STAFFNO!=staffno
    })
    setStaffs(arr)
    await axios.delete(`http://localhost:8081/api/dhstaff/delete`,{ params: { id: staffno }})
   .then(()=>{
   }
    ).catch(err=>{
     console.log('failed');
   }) 
  }

  return (
    <>
    <div><h1>Staff List </h1>
      <span><NavLink to='/loggedin/hirenewstaff' ><button>Hire New Staff</button></NavLink></span>
    </div>
    <br /><br /> 
    <table>
    <thead>
      <tr>
    <th>Staff No</th>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Position</th>
    <th>Sex</th>
    <th>DOB</th>
    <th>Salary</th>
    <th>Branch No</th>
    <th>Telephon</th>
    <th>Moblie</th>
    <th>Email</th>
    </tr>
    </thead>
    <tbody>
      {staffs.map((staff,index)=>(
            <tr key={index}>
            <td>{staff.STAFFNO}</td>
            <td>{staff.FNAME}</td>
            <td>{staff.LNAME}</td>
            <td>{staff.POSITION}</td>
            <td>{staff.SEX}</td>
            <td>{staff.DOB.substring(0,10)}</td>
            <td>{staff.SALARY}</td>
            <td>{staff.BRANCHNO}</td>
            <td>{staff.TELEPHONE}</td>
            <td>{staff.MOBILE}</td>
            <td>{staff.EMAIL}</td>
            <td><NavLink to={{pathname:`/loggedin/item/${staff.STAFFNO}/${staff.FNAME}/${staff.LNAME}/${staff.EMAIL}/${staff.TELEPHONE}/${staff.SALARY}`}}><button>UPDATE</button></NavLink></td>
            <td><button onClick={()=>handleDelete(staff.STAFFNO)}>DELETE</button></td> 
            </tr>
      ))}
    </tbody>
    </table>
    </>
  )
}
