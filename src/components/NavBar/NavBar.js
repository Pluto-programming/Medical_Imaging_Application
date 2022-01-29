import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from '../../Pages/Home.js';
import AllReports from '../../Pages/AllReports.js';
import UserProfile from '../../Pages/UserProile.js';

function NavBar() {
  return (
    <div>
        <Router>
            <div>
              <nav>
                <ul>
                <li>
                  <Link to="/Home">Home</Link>
                </li>
                <li>
                    <Link to="/AllReports">All Reports</Link>
                  </li>
                  <li>
                    <Link to="/UserProfile">UserProfile</Link>
                  </li>
                  </ul>
                </nav>
              </div>
              <Routes>
              <Route path='/Home' element={ <Home/> }/>
              <Route path='AllReports' element={ <AllReports /> }/>
              <Route path='UserProfile' element={ <UserProfile/>  }/>
              </Routes>
        </Router>
    </div>
  );
}

export default NavBar;
