import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './BranchUpdate.css'


export default function MyBranches() {

  const [branches, setBranches] = useState([])

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/branches');
      if(response.ok){
        setBranches(await response.json())}
    }
    fetchData(); 
  }, [])

  return (
    <>
      <div>
        <h1>Branch Update</h1>
      </div>
      <br /><br />
      {branches.length === 0 ? <h2>&nbsp;&nbsp;&nbsp;&nbsp;Loading ... ...</h2> :
        <table>
          <thead>
            {/* <tr> */}
              <th>Branch No</th><th>Street</th><th>City</th><th>Postal</th>
            {/* </tr> */}
        </thead>
          <tbody>
            {branches.map((Branch, index) => (
              <tr key={index}>
                <td>{Branch[0]}</td>
                <td>{Branch[1]}</td>
                <td>{Branch[2]}</td>
                <td>{Branch[3]}</td>
                {/* <td><NavLink to={{ pathname: `/loggedin/item/${Branch.BranchNO}/${Branch.FNAME}/${Branch.LNAME}/${Branch.EMAIL}/${Branch.TELEPHONE}/${Branch.SALARY}` }}><button className='inlineButton'>UPDATE</button></NavLink></td> */}
                <td><NavLink to={`/loggedin/item/${Branch.BRANCHNO}/${Branch.STREET}/${Branch.CITY}/${Branch.POSTCODE}`} ><button className='inlineButton'>UPDATE</button></NavLink></td>
              </tr>
            ))}
          </tbody>
        </table>}
    </>
  )
}