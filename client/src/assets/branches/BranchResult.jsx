import React, { useEffect, useState } from 'react';
import './BranchResult.css'

function BranchResult() {

  const [allBranches, setAllBranches] = useState([]);

  useEffect(() => {
    fetchAllBranches();
  }, []);

  const handleOnChange = (event, index) => {
    const { id, value } = event.target;
    const updatedBranches = [...allBranches];
    updatedBranches[index] = [...updatedBranches[index]]; 
    updatedBranches[index][id] = value; 
    setAllBranches(updatedBranches);
  }

  const fetchAllBranches = async () => {
    try {
      const response = await fetch('/api/branches');
      const data = await response.json();
      setAllBranches(data); 
    } catch (error) {
      console.error('Error fetching branches:', error);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/branches', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(allBranches)
      });
      if(response.ok){
        alert("You successfully updated the branch information");
      }
    } catch (error) {
      console.error('Error fetching branches:', error);
    }
  }

  return (
    <div className="BranchResultContainer">
      {allBranches.map((element, index) => (
        <div className="BranchResult" key={index}>
          <h1>Branch #: {element[0]}</h1>
          <form key={index}>

            <label htmlFor={`STREET_${index}`} className="InputLabel">Street Address:</label>
            <input type="text" id='2' defaultValue={element[1]} onChange = {(e) => {handleOnChange(e, index)}}/>

            <label htmlFor={`CITY_${index}`} className="InputLabel">City:</label>
            <input type="text" id='3' defaultValue={element[2]} onChange = {(e) => {handleOnChange(e, index)}}/>

            <label htmlFor={`POSTCODE_${index}`} className="InputLabel">Postal Code:</label>
            <input type="text" id='4' defaultValue={element[3]} onChange = {(e) => {handleOnChange(e, index)}}/>
            <br />
            <br />
          </form>
        </div>
      ))}
      <button onClick={()=>{handleSubmit()}} className="UpdateButton">Update</button>
    </div>
  );
}

export default BranchResult;

  
