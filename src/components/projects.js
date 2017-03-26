import React, { Component } from 'react';
import { connect } from 'react-redux';

class Projects extends Component {
  render () {
    return (
      <div className="projects">
        <h1>Projects</h1>
        <ul>
          <li>Frogger Arcade Game</li>
          <li>Full Circle Goal Tracker</li>
          <li>Maps Project</li>
          <li>Health Tracker</li>
        </ul>
      </div>
    )
  }
}

export default Projects;
