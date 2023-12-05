import React, { useState, useStyle } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import './Mystaffs.css'

export default function Mystaffs() {
  // const style= useStyle();

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
      <div className='staffs-page'><h1 className='display-title'>Staff List </h1>
        <NavLink to='/loggedin/hirenewstaff' ><button className='hire-new-button'>Hire New Staff</button></NavLink> 
        {/* <form action=""><button>Search</button><input type="text" />
        <h1>by</h1>
        <select name="indext" id="">
          <option value="staffNo">Staff No</option>
          <option value="firstname">Firstname</option>
          <option value="lastname">Lastname</option>
          <option value="position">Position</option>
          <option value="mobile">Mobile</option>
          <option value="email">Email</option>
          </select></form></span> */}
      </div>
      <br /><br />
      {staffs.length === 0 ? <h2>&nbsp;&nbsp;&nbsp;&nbsp;Loading ... ...</h2> :
        <table>
          <thead>
            {/* <tr> */}
              <th>Staff No</th><th>Firstname</th><th>Lastname</th><th>Position</th><th>Sex</th><th>DOB</th><th>Salary</th><th>Branch No</th><th>Telephon</th><th>Moblie</th><th>Email</th>
            {/* </tr> */}
        </thead>
          <tbody>
            {staffs.map((staff, index) => (
              <tr key={index}>
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
                {/* <td><NavLink to={{ pathname: `/loggedin/item/${staff.STAFFNO}/${staff.FNAME}/${staff.LNAME}/${staff.EMAIL}/${staff.TELEPHONE}/${staff.SALARY}` }}><button className='inlineButton'>UPDATE</button></NavLink></td> */}
                <td><NavLink to={`/loggedin/item/${staff.STAFFNO}/${staff.FNAME}/${staff.LNAME}/${staff.EMAIL}/${staff.TELEPHONE}/${staff.SALARY}`} ><button className='inlineButton'>UPDATE</button></NavLink></td>
                <td><button className='inlineButton' onClick={() => handleDelete(staff.STAFFNO)}>DELETE</button></td>
              </tr>
            ))}
          </tbody>
        </table>}
    </>
  )
}
