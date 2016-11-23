import React, { Component } from 'react';
import './App.css';
import NewGraditude from './NewGraditude.js';
import GraditudeList from './GraditudeList.js';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Gratitudes</h2>
        </div>
        <p className="App-intro">
          A list of graditudes even while living in turbulent times.
        </p>
        <NewGraditude />
        <GraditudeList/>
      </div>
    );
  }
};
