import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBell, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/logoramcoperu.jpeg";

const Navbar = () => {
  return (
    <Router>
      <div className="flex items-center justify-between bg-white text-gray-800 p-4 shadow-md">
        <div>
          <img 
            src={logo} 
            alt="Logo RamcoPeru" 
            className="mx-auto mb-2 logo"
            style={{ maxWidth: '100px' }} 
          />
        </div>
        <div>
          <FontAwesomeIcon icon={faHome} size="lg" style={{ color: '#c79e3e' }} />
        </div>
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faUser} size="lg" style={{ color: '#c79e3e' }} />
          <FontAwesomeIcon icon={faBell} size="lg" style={{ color: '#c79e3e' }} />
          <NavLink to="/login" className="flex items-center">
            <FontAwesomeIcon icon={faSignOutAlt} size="lg" style={{ color: '#c79e3e' }} />
          </NavLink>
        </div>
      </div>
    </Router>
  );
};

export default Navbar;
