import React from 'react';
import {
  func, oneOfType, arrayOf, node, string, objectOf, number,
} from 'prop-types';
import { theme } from '../../utils';

import './Button.css';

const Button = ({ onClick, children, style }) => (
  <button className="Button" onClick={onClick} type="button" style={{ backgroundColor: theme.active, color: theme.text.light, ...style }}>{children}</button>
);

Button.propTypes = {
  onClick: func.isRequired,
  children: oneOfType([arrayOf(oneOfType([node, string])), node, string]).isRequired,
  style: objectOf(oneOfType([string, number])),
};

Button.defaultProps = { style: {} };

export default Button;
