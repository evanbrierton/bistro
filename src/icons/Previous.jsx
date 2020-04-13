import React from 'react';
import { string, number } from 'prop-types';

const Previous = ({ color, size }) => (
  <svg fill={color} xmlns="http://www.w3.org/2000/svg" height={size} viewBox={`0 0 ${size} ${size}`} width={size}>
    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

Previous.propTypes = { color: string.isRequired, size: number };
Previous.defaultProps = { size: 24 };

export default Previous;
