import React from 'react';
import {
  string, arrayOf, number, oneOfType, objectOf, bool, node,
} from 'prop-types';
import { Colour, theme } from '../../utils';

import './Jumbotron.css';

const Jumbotron = ({
  heading, paragraphs, height, colour, shadow, style, children,
}) => {
  const textColour = new Colour(colour).luminosity > 186 ? theme.text.dark : theme.text.light;
  return (
    <section
      className="Jumbotron"
      style={{
        ...style,
        height,
        backgroundColor: colour,
        boxShadow: shadow ? '0px 0px 10px 10px rgba(0,0,0,0.75)' : '',
        color: textColour,
      }}
    >
      <h3>{heading}</h3>
      <hr style={{ backgroundColor: textColour, borderColour: textColour }} />
      {children}
      {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </section>
  );
};

Jumbotron.propTypes = {
  heading: string.isRequired,
  paragraphs: arrayOf(string),
  height: oneOfType([string, number]),
  colour: string,
  shadow: bool,
  style: objectOf(oneOfType([string, number])),
  children: oneOfType([arrayOf(node), node]),
};

Jumbotron.defaultProps = {
  paragraphs: [], height: 'fit-content', colour: theme.text.light, shadow: false, style: {}, children: null,
};

export default Jumbotron;
