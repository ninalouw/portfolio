import React, { Component } from 'react';
import { connect } from 'react-redux';
import Avatar from 'material-ui/Avatar';

class About extends Component {
  render () {
    return(
      <div className='about'>
        <div className='about-avatar'>
          <Avatar
              src='https://avatars1.githubusercontent.com/u/17684394?v=3&amp;s=460'
              size={150}
              style={{margin: 5, border: 0}} />
          </div>
        <div className='about-text'>
          <h1>About Me</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    )
  }
}

export default About;
