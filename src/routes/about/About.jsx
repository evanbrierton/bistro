import React from 'react';
import { arrayOf, strings } from 'prop-types';
import { Jumbotron } from '../../components';

const About = ({ paragraphs }) => (
  <main>
    <Jumbotron heading="Our Story" paragraphs={paragraphs} />
  </main>
);

About.propTypes = { paragraphs: arrayOf(strings).isRequired };

export default About;
