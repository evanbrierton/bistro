import React from 'react';
import { arrayOf, strings } from 'prop-types';
import { background, burger, bar } from '../../images';
import { Parallax, Jumbotron, BookingModal } from '../../components';
import { theme } from '../../utils';

import './Home.css';

const Home = ({ paragraphs }) => (
  <main>
    <Parallax heading="Welcome to: The Bistro" background={background} />
    <Jumbotron heading="Our Story" paragraphs={paragraphs.slice(0, 2)} />
    <Parallax heading="Burgers, fries and good times." background={burger} />
    <Jumbotron heading="Book a Table" colour={theme.primary}>
      <BookingModal />
    </Jumbotron>
    <Parallax heading="Burgers, fries and good times." background={bar} />
    <Jumbotron heading="Where we are" paragraphs={paragraphs.slice(2)}>
      <div className="map-wrapper">
        <iframe title="map" src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=UCD+(map)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameBorder="0" />
      </div>
    </Jumbotron>
  </main>
);

Home.propTypes = { paragraphs: arrayOf(strings).isRequired };

export default Home;
