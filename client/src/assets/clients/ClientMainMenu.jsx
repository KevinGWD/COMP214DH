import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import './Client.css'
export default function ClientMainMenu() {

  
  const [clients, setClients] = useState([])

  React.useEffect(()=>{
    axios('http://localhost:8081/api/dhclient/').then(response=>{
      if (response.status===200){
        const fetchedData=response.data;
        setClients(fetchedData);
        console.log(fetchedData)
      }
   }).catch(err=>{
    console.log("Failure!")
    setClients([])
   })  
  },[])

  const handleDelete=async (clientno)=>{
    let arr=clients.filter(function(obj){
      return obj.CLIENTNO!=clientno
    })
    setClients(arr)
    await axios.delete(`/api/dhclient/delete`,{ params: { id: clientno }})
   .then(()=>{
   }
    ).catch(err=>{
     console.log('failed');
   }) 
  }

  return (
    <>
    <div><h1 className='display-title display-3'>Client List </h1>
    <hr />
      <span><NavLink to='/hirenewclient' ><button className='hire-new-button btn btn-lg btn-success'> <i class="fa fa-plus"></i> Hire New Staff</button></NavLink></span>
    </div>
    <br /><br /> 
    {clients.length===0?<h2>&nbsp;&nbsp;&nbsp;&nbsp;Connecting...</h2>:
    <table className='table table-hover table-bordered'>
    <thead>
      <tr>
    <th>Client No</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Telephone Number</th>
    <th>Street</th>
    <th>City</th>
    <th>Email</th>
    <th>Preferred House Type</th>
    <th>Maximum Rent</th>
    <th>Update Client</th>
    <th>Delete Client</th>
    </tr>
    </thead>
    <tbody>
      {clients.map((client,index)=>(
            <tr key={index}>
            <td>{client.CLIENTNO}</td>
            <td>{client.FNAME}</td>
            <td>{client.LNAME}</td>
            <td>{client.TELNO}</td>
            <td>{client.STREET}</td>
            <td>{client.CITY}</td>
            <td>{client.EMAIL}</td>
            <td>{client.PREFTYPE}</td>
            <td>{client.MAXRENT}</td> 
            <td><NavLink to={{pathname:`/client/${client.CLIENTNO}/${client.FNAME}/${client.LNAME}/${client.TELNO}/${client.STREET}/${client.CITY}/${client.EMAIL}/${client.PREFTYPE}/${client.MAXRENT}`}}><button className='inlineButton btn btn-warning'> <i className='fa fa-pencil'></i> Update</button></NavLink></td>
            <td><button className='inlineButton btn btn-danger' onClick={()=>handleDelete(client.CLIENTNO)}><i className='fa fa-close'></i> Delete</button></td> 
            </tr>
      ))}
    </tbody>
    </table>}
    </>
  )
}
