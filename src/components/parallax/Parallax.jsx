import React from 'react';
import {
  string, number, objectOf, oneOfType,
} from 'prop-types';
import { theme } from '../../utils';

import './Parallax.css';

const Parallax = ({ background, heading, style }) => (
  <section className="Parallax" style={{ color: theme.text.light, ...style }}>
    <div className="background" style={{ backgroundImage: `url(${background})` }} />
    {heading ? <h2>{heading}</h2> : null}
  </section>
);

Parallax.propTypes = {
  background: string.isRequired, heading: string, style: objectOf(oneOfType([string, number])),
};
Parallax.defaultProps = { heading: '', style: {} };

export default Parallax;
