import React from 'react';
import {
  objectOf, oneOfType, number, string,
} from 'prop-types';
import { NavLink } from 'react-router-dom';

import './Navbar.css';
import { theme } from '../../utils';

const Navbar = ({ style }) => (
  <nav className="Navbar" style={{ color: theme.text.light, backgroundColor: theme.primary, ...style }}>
    <h5><NavLink to="#">Menu</NavLink></h5>
    <h5><NavLink to="/about">Our Story</NavLink></h5>
    <h1><NavLink to="/">The Bistro</NavLink></h1>
    <h5><NavLink to="/book">Book a Table</NavLink></h5>
    <h5><NavLink to="/location">Where we are</NavLink></h5>
  </nav>
);

Navbar.propTypes = { style: objectOf(oneOfType([number, string])) };
Navbar.defaultProps = { style: {} };


export default Navbar;
