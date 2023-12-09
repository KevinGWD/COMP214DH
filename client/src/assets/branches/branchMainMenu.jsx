import {Link} from 'react-router-dom';

function myLinks(){
    return(
        <div>
            <Link to="/branchMainMenu/Search">Branch Search</Link>
            <br />
            <Link to="/branchMainMenu/Update">Update Branches</Link>
            <br />
            <Link to="/branchMainMenu/Open">Open New Branch</Link>
            <br />
        </div>
    )
}

export default myLinks
