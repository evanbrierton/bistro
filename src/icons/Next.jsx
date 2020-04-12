import React from 'react';
import { string } from 'prop-types';
import { theme } from '../utils';

const Next = ({ colour }) => (
  <svg fill={colour} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

Next.propTypes = { colour: string };
Next.defaultProps = { colour: theme.text.light };

export default Next;
