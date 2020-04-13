import React from 'react';
import { string, number } from 'prop-types';

const Next = ({ color, size }) => (
  <svg fill={color} xmlns="http://www.w3.org/2000/svg" height={size} viewBox={`0 0 ${size} ${size}`} width={size} style={{ width: size, height: size }}>
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

Next.propTypes = { color: string.isRequired, size: number };
Next.defaultProps = { size: 24 };

export default Next;
