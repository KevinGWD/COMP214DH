import React, { useState } from 'react';

function BranchOpen() {

  const [allBranches, setAllBranches] = useState([]);

  const handleOnChange = (event) => {
    const { id, value } = event.target;
    const updatedBranches = [...allBranches];
    updatedBranches[id] = value;
    setAllBranches(updatedBranches);
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/branches/open', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(allBranches)
      });
      if(response.ok){
        alert('You successfully opened a branch');
      }
    } catch (error) {
      console.error('Error fetching branches:', error);
    }
  }

  return (
    <div>
        <div className="BranchOpen">
          <form onSubmit={handleSubmit}>

            <label>Branch #:</label>
            <input type="text" id='0' onChange = {(e) => {handleOnChange(e)}}/>

            <label>Street Address:</label>
            <input type="text" id='1' onChange = {(e) => {handleOnChange(e)}}/>

            <label>City:</label>
            <input type="text" id='2' onChange = {(e) => {handleOnChange(e)}}/>

            <label>Postal Code:</label>
            <input type="text" id='3' onChange = {(e) => {handleOnChange(e)}}/>
            <br />
            <br />
            <button type='submit'>Create</button>
          </form>
        </div>
      
    </div>
  );
}

export default BranchOpen;

  
