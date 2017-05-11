import React, { Component } from 'react';
import { Link } from 'react-router';
import {Row, Col} from 'react-materialize';

class Header extends Component {
  render () {
    return (
      <div className="header-bar">
        <Row>
          <Col s={12} m={12} l={12} className='my-navbar'>
                <ul className='navbar-ul'>
                    <Link to='/'>
                        <li className="navbar-logo navbar-li"> NML</li>
                    </Link>
                    <Link to='about'>
                        <li className="navbar-li">About</li>
                    </Link>
                    <Link to='projects'>
                        <li className="navbar-li">Projects</li>
                    </Link>
                    <Link to='skills'>
                        <li className="navbar-li">Skills</li>
                    </Link>
                    <Link to='contact'>
                        <li className="navbar-li">Contact</li>
                    </Link>
                </ul>
            </Col>
          </Row>
      </div>
    );
  }
}

export default Header;
