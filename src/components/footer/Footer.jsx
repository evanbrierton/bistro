import React from 'react';
import {
  objectOf, oneOfType, number, string,
} from 'prop-types';

import './Footer.css';
import { theme } from '../../utils';

const Footer = ({ style }) => (
  <footer className="Footer" style={{ color: theme.text.light, backgroundColor: theme.primary, ...style }}>
    <span />
    <span className="credit-wrapper">
      Designed by&nbsp;
      <a
        className="credit"
        target="_blank"
        rel="noopener noreferrer"
        href="https://evanbrierton.github.io"
      >
        Evan Brierton
      </a>
    </span>
  </footer>
);

Footer.propTypes = { style: objectOf(oneOfType([number, string])) };
Footer.defaultProps = { style: {} };


export default Footer;
