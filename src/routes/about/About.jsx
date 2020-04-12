import React from 'react';
import { arrayOf, string } from 'prop-types';
import { Jumbotron } from '../../components';

const About = ({ paragraphs }) => (
  <Jumbotron heading="Our Story" paragraphs={paragraphs} />
);

About.propTypes = { paragraphs: arrayOf(string).isRequired };

export default About;
