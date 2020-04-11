import React, { Component } from 'react';
import { background, burger } from '../../images';
import { Parallax, Jumbotron } from '../../components';
import { hipsum, theme } from '../../utils';

import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { paragraphs: [] };
  }

  componentDidMount = () => hipsum(2).then((paragraphs) => this.setState({ paragraphs }))

  render = () => {
    const { paragraphs } = this.state;
    return (
      <main>
        <Parallax heading="Welcome to: The Bistro" background={background} />
        <Jumbotron heading="Our Story" paragraphs={paragraphs} />
        <Parallax heading="Burgers, fries and good times." background={burger} />
        <Jumbotron heading="Book a Table" colour={theme.primary} />
      </main>
    );
  }
}

export default Home;
