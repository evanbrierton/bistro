import React from 'react';
import { arrayOf, string } from 'prop-types';
import { Jumbotron } from '../../components';

const Location = ({ paragraphs }) => (
  <Jumbotron heading="Where we are" paragraphs={paragraphs}>
    <div className="map-wrapper">
      <iframe title="map" src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=UCD+(map)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameBorder="0" />
    </div>
  </Jumbotron>
);

Location.propTypes = { paragraphs: arrayOf(string).isRequired };

export default Location;
