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
        <li>Projects</li>
        <li>Education</li>
        <li>Contact</li>
      </div>
    )
  }
}

export default Header;
