import React, { Component } from 'react';
import './GraditudeList.css';
import GraditudeItem from './GraditudeItem.js';

export default class GraditudeList extends Component {
  render() {
    return (
      <div className="GraditudeList">
          <h2>This Is A GraditudeList</h2>
          <GraditudeItem />
          <GraditudeItem />
          <GraditudeItem />
      </div>
    );
  }
};
