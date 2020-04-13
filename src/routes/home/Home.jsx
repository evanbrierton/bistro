import React from 'react';
import { arrayOf, string } from 'prop-types';
import { background, burger, bar } from '../../images';
import { Parallax } from '../../components';
import About from '../about';
import Book from '../book';
import Location from '../location';
import { theme } from '../../utils';

import './Home.css';

const Home = ({ paragraphs }) => (
  <>
    <Parallax heading="Welcome to: The Bistro" background={background} />
    <About paragraphs={paragraphs.slice(0, 2)} />
    <Parallax heading="Burgers, fries and good times." background={burger} />
    <Book colour={theme.primary} />
    <Parallax heading="Time flies when you’re having rum." background={bar} />
    <Location paragraphs={paragraphs.slice(2)} />
  </>
);

Home.propTypes = { paragraphs: arrayOf(string).isRequired };

export default Home;
