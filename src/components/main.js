import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Row, Col} from 'react-materialize';
import FontAwesome from 'react-fontawesome';

class Main extends Component {
    render() {
    return (
        <div>
          <Row className='hero-image'>
              <Col s={2} m={4} l={4}className ="hero-circle hero-text">
                    <p className="header-greet"> Hi I'm </p>
                    <h1 className="header-name">Nina Mae Louw</h1>
                    <p className="header-para">Web Developer & Web Designer</p>
              </Col>
              <Col s={5} m={4} l={4}>
              </Col>
              <Col s={5} m={4} l={4}>
                <a href="https://github.com/ninalouw">
                  <FontAwesome className="fa-icon" name='github' size='2x'/>
                </a>
                <a href="https://twitter.com/ninamaelouw">
                  <FontAwesome className="fa-icon" name='twitter' size='2x'/>
                </a>
                <a href="https://www.linkedin.com/in/ninamaelouw/">
                  <FontAwesome className="fa-icon" name='linkedin' size='2x'/>
                </a>
              </Col>
          </Row>
              <Col s={5} m={4} l={4}>
              </Col>
              <Col s={5} m={4} l={4} className="facts-heading">
                <h2>Fun Facts</h2>
              </Col>
              <Col s={5} m={4} l={4}>
              </Col>
          <Row>
          </Row>
              <Col s={12} m={12} l={12} className="facts-para">
                <p>Graduate of CodeCore Bootcamp and Udacity Front-End Nanodegree.</p>
                <p>Currently building a Ruby on Rails web app with React with Redux.</p>
                <p>Honing my Javascript with ‘JS The Weird Parts’ & ‘Advanced React with Redux’.</p>
                <p>Learning the ways of a Designer in Photoshop, Sketch & Illustrator & and becoming too enthused by typography.</p>
              </Col>
          <Row>

          </Row>
        </div>
    );
  }
}

export default Main;
