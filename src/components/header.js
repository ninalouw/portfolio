import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render () {
    return (
      <div className="header-bar">
        <Link to='/'>
          <li>Nina Louw</li>
        </Link>
        <Link to='about'>
          <li>About</li>
        </Link>
        <Link to='projects'>
          <li>Projects</li>
        </Link>
        <li>Education</li>
        <li>Contact</li>
      </div>
    )
  }
}

export default Header;
