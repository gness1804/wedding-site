/* eslint-disable-next-line no-unused-vars */
import React, { Component } from 'react';
import './App.css';
/* eslint-disable-next-line no-unused-vars */
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p>I am the main component.</p>
      </div>
    );
  }
}

export default App;
