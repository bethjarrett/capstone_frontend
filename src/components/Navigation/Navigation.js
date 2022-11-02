import React from 'react';

import { FaCommentDots, FaAddressCard, FaImages, FaRegCalendarAlt } from 'react-icons/fa';

class Navigation extends React.Component {
    render() {
      return(
<nav className="navbar navbar-expand navbar-dark bg-primary">
    <div className="container-fluid"><a href="/" className="navbar-brand">scrapebook</a>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className='nav-ite'><a href="/" className="nav-link"><button type="button" className="btn btn-primary"><FaCommentDots /></button></a></li>
            <li className="nav-item"><a className="nav-link"><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalCenter"><FaAddressCard /></button></a></li>
            <li className="nav-item"><a className="nav-link" href="/photos"><button type="button" className="btn btn-primary"><FaImages /></button></a></li>
            <li className="nav-item"><a className="nav-link" href="/quiz"><button type="button" className="btn btn-primary"><FaRegCalendarAlt /></button></a></li>
        </ul>
    </div>
</nav>
        );
      }
    }
    export default Navigation;