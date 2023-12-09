import {Link} from 'react-router-dom';

function myLinks(){
    return(
        <div>
            <Link to="/Branch/Search">Branch Search</Link>
            <br />
            <Link to="/Branch/Update">Update Branches</Link>
            <br />
            <Link to="/Branch/Open">Open New Branch</Link>
            <br />
        </div>
    )
}

export default myLinks