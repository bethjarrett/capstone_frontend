import React from 'react';

import { FaCommentDots, FaAddressCard, FaImages, FaRegCalendarAlt } from 'react-icons/fa';

class Navigation extends React.Component {
    render() {
      return(
<nav className="navbar navbar-expand navbar-dark bg-primary">
    <div className="container-fluid"><a href="/wall" className="navbar-brand nav-font">scrapebook</a>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className='nav-item'><a className="nav-link" href="/wall"><button type="button" className="btn btn-primary btn-sm"><FaCommentDots /></button></a></li>
            <li className="nav-item"><a className="nav-link" href="/#"><button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#modalCenter"><FaAddressCard /></button></a></li>
            <li className="nav-item"><a className="nav-link" href="/photos"><button type="button" className="btn btn-primary btn-sm"><FaImages /></button></a></li>
            <li className="nav-item"><a className="nav-link" href="/quiz"><button type="button" className="btn btn-primary btn-sm"><FaRegCalendarAlt /></button></a></li>
        </ul>
    </div>
</nav>
        );
      }
    }
    export default Navigation;