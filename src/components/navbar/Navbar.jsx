import React from 'react';
import {
  objectOf, oneOfType, number, string,
} from 'prop-types';
import { NavLink } from 'react-router-dom';

import './Navbar.css';
import { theme } from '../../utils';

const Navbar = ({ style }) => (
  <nav className="Navbar" style={{ color: theme.text.light, backgroundColor: theme.primary, ...style }}>
    <h1><NavLink to="/">The Bistro</NavLink></h1>
  </nav>
);

Navbar.propTypes = { style: objectOf(oneOfType([number, string])) };
Navbar.defaultProps = { style: {} };


export default Navbar;
