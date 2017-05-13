import React, { Component} from 'react';
import { connect } from 'react-redux';
import {Row, Col} from 'react-materialize';

class Contact extends Component {
  render () {
    return (
      <div className="contact">
        <Row className='skills-header'>
          <Col s={2} m={2} l={2} className='skills-circle'>
            <h1 className='skills-h1'>Contact</h1>
          </Col>
        </Row>
        <Row className='skills-h2-row'>
          <Col s={12} m={6} l={6} >
            <h2 className='skills-h2'>Contact Me</h2>
            <p> Email me if you have any questions or would like to connect. </p>
          </Col>
          <Col s={12} m={6} l={6} >
            <a href="mailto:ninamaelouw@gmail.com"><button className="github-btn">SEND EMAIL</button></a>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Contact;
