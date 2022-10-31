import React from 'react';

import {Link} from "react-router-dom";
import { FaUserFriends, FaComments, FaGlobeAmericas, FaLock } from 'react-icons/fa';

class Navigation extends React.Component {
    render() {
      return(
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container"><Link to="/" className="navbar-brand">Scrapebook</Link>
        <div className="collapse navbar-collapse" id="fakebookNavbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><a className="nav-link"><FaUserFriends /></a></li>
                <li className="nav-item"><a className="nav-link"><FaComments /></a></li>
                <li className="nav-item"><a className="nav-link"><FaGlobeAmericas /></a></li>
                <form><input className="form-control" type="text" placeholder="Search" aria-label="Search" /></form>
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item"><Link to="/login" className="nav-link"><FaLock /></Link></li>
            </ul>
        </div>
    </div>
</nav>
        );
      }
    }
    export default Navigation;