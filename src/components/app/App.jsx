import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from '../main';
import Navbar from '../navbar';
import Footer from '../footer';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      <Main />
      <Footer />
    </div>
  </Router>
);

export default App;
