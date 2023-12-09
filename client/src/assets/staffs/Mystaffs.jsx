import React, { useState, useStyle } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import './Mystaffs.css'

export default function Mystaffs() {

  const [staffs, setStaffs] = useState([])

  React.useEffect(() => {
    axios('/api/dhstaff/').then(response => {
      if (response.status === 200) {
        const fetchedData = response.data;
        setStaffs(fetchedData);
        console.log(fetchedData)
      }
    }).catch(err => {
      setStaffs([])
    })
  }, [])

  const handleDelete = async (staffno) => {
    let arr = staffs.filter(function (obj) {
      return obj.STAFFNO != staffno
    })
    setStaffs(arr)
    await axios.delete(`/api/dhstaff/delete`, { params: { id: staffno } })
      .then(() => {
      }
      ).catch(err => {
        console.log('failed');
      })
  }

  return (
    <>
      <div className='staffs-page'><h1 className='display-title display-3'>Staff List </h1>
      <hr />
        <NavLink to='/hirenewstaff' ><button className='hire-new-button btn btn-lg btn-success'> <i class="fa fa-plus"></i> Hire New Staff</button></NavLink>
      </div>
      <br /><br />
      {staffs.length === 0 ? <h2>&nbsp;&nbsp;&nbsp;&nbsp;Loading ... ...</h2> :
        <table className='table table-hover table-bordered'>
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
              <th>Update Staff Member</th>
              <th>Delete Staff Member</th>
            </tr>
          </thead>
          <tbody>
            {staffs.map((staff, index) => (
              <tr key={index} className='table-rows'>
                <td>{staff.STAFFNO}</td>
                <td>{staff.FNAME}</td>
                <td>{staff.LNAME}</td>
                <td>{staff.POSITION}</td>
                <td>{staff.SEX}</td>
                <td>{staff.DOB.substring(0, 10)}</td>
                <td>{staff.SALARY}</td>
                <td>{staff.BRANCHNO}</td>
                <td>{staff.TELEPHONE}</td>
                <td>{staff.MOBILE}</td>
                <td>{staff.EMAIL}</td>
                <td><NavLink to={`/item/${staff.STAFFNO}/${staff.FNAME}/${staff.LNAME}/${staff.EMAIL}/${staff.TELEPHONE}/${staff.SALARY}`} ><button className='inlineButton btn btn-warning'> <i className='fa fa-pencil'></i>UPDATE</button></NavLink></td>
                <td><button className='inlineButton btn btn-danger' onClick={() => handleDelete(staff.STAFFNO)}> <i className='fa fa-warning'></i> Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>}
    </>
  )
}
