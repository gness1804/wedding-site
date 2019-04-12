/* eslint-disable-next-line no-unused-vars */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
/* eslint-disable-next-line no-unused-vars */
import Header from './components/Header';
import Home from './components/Home';
import Ceremony from './components/Ceremony';
import OurStory from './components/OurStory';
import Reception from './components/Reception';
import RSVP from './components/RSVP';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/ceremony" component={Ceremony} />
          <Route path="/reception" component={Reception} />
          <Route path="/rsvp" component={RSVP} />
          <Route path="/our-story" component={OurStory} />
        </Router>
      </div>
    );
  }
}

export default App;
