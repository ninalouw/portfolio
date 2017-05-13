import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Row, Col} from 'react-materialize';
import FontAwesome from 'react-fontawesome';

class Main extends Component {
    render() {
    return (
        <div>
          <section className="mast">
            <figure className="mast-bg"></figure>
            <div className="grid">
              <div className="mast-content">
                <span className="mast-subtitle"> Nina Mae Louw</span>
                <h1 className="mast-title">Web Developer & Designer</h1>
                <span className="mast-subtitle-icons">
                <a href="https://github.com/ninalouw">
                  <FontAwesome className="fa-icon" name='github' size='2x'/>
                </a>
                <a href="https://twitter.com/ninamaelouw">
                  <FontAwesome className="fa-icon" name='twitter' size='2x'/>
                </a>
                <a href="https://www.linkedin.com/in/ninamaelouw/">
                  <FontAwesome className="fa-icon" name='linkedin' size='2x'/>
                </a>
              </span>
              </div>
                <figure className="mast-graphic">
                <img className="mast-graphic-img" src=" "/>
              </figure>
            </div>
          </section>
          <Row>
              <Col s={12} m={12} l={12}>
                <h2 className="facts-heading">Fun Facts</h2>
              </Col>
          </Row>
          <Row className="facts-row">
              <Col s={10} m={12} l={12} className="facts-para">
                <p>Graduate of <a className="para-a" href='https://codecore.ca/'>CodeCore Bootcamp</a> and <a className="para-a" href='https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'>Udacity</a> Front-End Nanodegree.</p>
                <p>Currently building a Ruby on Rails web app with React with Redux.</p>
                <p>Honing my Javascript with <a className="para-a" href='https://www.udemy.com/understand-javascript/learn/v4/overview'>‘JS The Weird Parts’</a> & <a className="para-a" href='https://www.udemy.com/react-redux-tutorial/learn/v4/overview'>‘Advanced React with Redux’</a>.</p>
                <p>Learning the ways of a Designer in Photoshop, Sketch & Illustrator & and becoming enthused by typography.</p>
              </Col>
          </Row>
        </div>
    );
  }
}

export default Main;
