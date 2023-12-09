import React, { useState } from 'react';
import './BranchSearch.css'
function BranchSearch() {
  const [myBranches, setMyBranches] = useState([]);

  async function fetchOne(branch) {
    try {
      const response = await fetch('/api/branches', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ branchNO: branch })
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      } else {
        setMyBranches(await response.json());
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }

  return (
    <div className="BranchSearch">
      <form className="searchForm">
        <label htmlFor="searchBranch" className="searchLabel">
          Branch Search
        </label>
        <div className="inputContainer">
          <input type="text" id="searchBranch" className="searchInput" />
          <button
            type="submit"
            className="searchButton"
            onClick={(e) => {
              fetchOne(document.getElementById('searchBranch').value);
              e.preventDefault();
            }}
          >
            Search
          </button>
        </div>
      </form>
      {myBranches.length > 0 && (
        <div className="branchDetails">
          <p className="branchDetail"><b>Street</b>: {myBranches[0][0]}</p>
          <p className="branchDetail"><b>City</b>: {myBranches[0][1]}</p>
          <p className="branchDetail"><b>Postal Code</b>: {myBranches[0][2]}</p>
        </div>
      )}
    </div>
  );
}

export default BranchSearch;
