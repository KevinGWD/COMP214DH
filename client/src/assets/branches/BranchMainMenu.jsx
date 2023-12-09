import React, { useState, useStyle } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import './MyBranch.css'

export default function MyBranches() {

  const [Branches, setBranches] = useState([])

  React.useEffect(() => {
    axios('/api/dhbranch/').then(response => {
      if (response.status === 200) {
        const fetchedData = response.data;
        setBranches(fetchedData);
        console.log(fetchedData)
      }
    }).catch(err => {
      setBranches([])
    })
  }, [])

  const handleDelete = async (branchno) => {
    let arr = Branches.filter(function (obj) {
      return obj.BRANCHNO != branchno
    })
    setBranches(arr)
    await axios.delete(`/api/dhbranch/delete`, { params: { id: branchno } })
      .then(() => {
      }
      ).catch(err => {
        console.log('failed');
      })
  }

  return (
    <>
      <div className='Branches-page'><h1 className='display-title display-3'>Branch List </h1>
      <hr />
        <NavLink to='/addnewbranch' ><button className='hire-new-button btn btn-lg btn-success'> <i class="fa fa-plus"></i> Add New Branch</button></NavLink>
      </div>
      <br /><br />
      {Branches.length === 0 ? <h2>&nbsp;&nbsp;&nbsp;&nbsp;Loading ... ...</h2> :
        <table className='table table-hover table-bordered'>
          <thead>
            <tr>
              <th>Branch No</th>
              <th>Street</th>
              <th>City</th>
              <th>Postcode</th>
              <th>Update Branch</th>
              <th>Delete Branch</th>
            </tr>
          </thead>
          <tbody>
            {Branches.map((branch, index) => (
              <tr key={index} className='table-rows'>
                <td>{branch.BRANCHNO}</td>
                <td>{branch.STREET}</td>
                <td>{branch.CITY}</td>
                <td>{branch.POSTCODE}</td>
                <td><NavLink to={`/branch/${branch.BRANCHNO}/${branch.STREET}/${branch.CITY}/${branch.POSTCODE}`} ><button className='inlineButton btn btn-warning'> <i className='fa fa-pencil'></i>UPDATE</button></NavLink></td>
                <td><button className='inlineButton btn btn-danger' onClick={() => handleDelete(branch.BRANCHNO)}> <i className='fa fa-warning'></i> Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>}
    </>
  )
}
