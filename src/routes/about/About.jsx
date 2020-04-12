import React from 'react';
import { arrayOf, strings } from 'prop-types';
import { Jumbotron } from '../../components';

const About = ({ paragraphs }) => (
  <Jumbotron heading="Our Story" paragraphs={paragraphs} />
);

About.propTypes = { paragraphs: arrayOf(strings).isRequired };

export default About;
