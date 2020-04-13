import React from 'react';
import {
  objectOf, oneOfType, number, string,
} from 'prop-types';
import { NavLink } from 'react-router-dom';

import './Navbar.css';
import { theme } from '../../utils';

const Navbar = ({ style }) => (
  <nav className="Navbar" style={{ color: theme.text.light, backgroundColor: theme.primary, ...style }}>
    <NavLink className="small-link" to="#"><h5>Menu</h5></NavLink>
    <NavLink className="small-link" to="/about"><h5>Our Story</h5></NavLink>
    <NavLink to="/"><h1 style={{ borderBottom: `solid ${theme.active} 5px` }}>The Bistro</h1></NavLink>
    <NavLink className="small-link" to="/book"><h5>Book a Table</h5></NavLink>
    <NavLink className="small-link" to="/location"><h5>Where to find us</h5></NavLink>
  </nav>
);

Navbar.propTypes = { style: objectOf(oneOfType([number, string])) };
Navbar.defaultProps = { style: {} };


export default Navbar;
