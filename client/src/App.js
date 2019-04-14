/* eslint-disable-next-line no-unused-vars */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
/* eslint-disable-next-line no-unused-vars */
import Header from './components/Header';
import Home from './components/Home';
import Ceremony from './components/Ceremony';
import OurStory from './components/OurStory';
import Reception from './components/Reception';
import RSVP from './components/RSVP';
import NotFound from './components/NotFound';

// TODO: replace the hardcoded routes with data from CMS.
// Try making this a functional component and use react hooks to bring in all content and pass it as children down
// or as context?

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/ceremony" component={Ceremony} />
          <Route path="/reception" component={Reception} />
          <Route path="/rsvp" component={RSVP} />
          <Route path="/our-story" component={OurStory} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
