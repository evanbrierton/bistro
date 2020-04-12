import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Book, About } from '../../routes';
import { hipsum } from '../../utils';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { paragraphs: [] };
  }

  componentDidMount = () => hipsum(3).then((paragraphs) => this.setState({ paragraphs }))

  render = () => {
    const { paragraphs } = this.state;
    return (
      <Switch>
        <Route exact path="/" render={() => <Home paragraphs={paragraphs} />} />
        <Route exact path="/about" render={() => <About paragraphs={paragraphs} />} />
        <Route exact path="/book" component={Book} />
      </Switch>
    );
  }
}

export default Main;
