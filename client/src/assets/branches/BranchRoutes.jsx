import {Route} from 'react-router-dom';
import BranchSearch from './BranchSearch.jsx';
import BranchList from './BranchResult.jsx';
import BranchOpen from './BranchOpen.jsx';
import MainMenu from './MainMenu.jsx';

export default function BranchRoutes() {
  return (
    <>
        <Route path = "/Branch" element={<><MainMenu/></>}/>
        <Route path = "/Branch/Search" element={<><BranchSearch/></>}/>
        <Route path = "/Branch/Update" element={<><BranchList/></>}/>
        <Route path = "/Branch/Open" element={<><BranchOpen/></>}/>
    </>
  );
}

