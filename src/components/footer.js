import React, { Component } from 'react';
import { Link } from 'react-router';

class Footer extends Component {
    render () {
        return (
      <div className="footer-bar">
        <p>Address: 121 W Hastings street, Vancouver </p>
        <p>info@hellothere.com</p>
      </div>
        );
    }
}

export default Footer;
