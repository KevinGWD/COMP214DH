import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import BranchSearch from './BranchSearch.jsx';
import BranchList from './BranchResult.jsx';
import BranchOpen from './BranchOpen.jsx';
import MainMenu from './MainMenu.jsx';

export default function BranchMainMenu() {
  return (
    <Router>
      <Routes>
        <Route path = "/Branch" element={<><MainMenu/></>}/>
        <Route path = "/Branch/Search" element={<><BranchSearch/></>}/>
        <Route path = "/Branch/List" element={<><BranchList/></>}/>
        <Route path = "/Branch/Open" element={<><BranchOpen/></>}/>
      </Routes>
    </Router>
  );
}
