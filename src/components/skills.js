import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Row, Col} from 'react-materialize';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

class Skills extends Component {
  render () {
    return(
      <div className='skills'>
        <Row className='skills-header'>
          <Col s={2} m={2} l={2} className='skills-circle'>
            <h1 className='skills-h1'>Skills</h1>
          </Col>
        </Row>
        <Row className='skills-h2-row'>
          <Col s={3} m={4} l={4} >
            <h2 className='skills-h2'>I'm proficient in ...</h2>
          </Col>
          <Col s={3} m={4} l={4} >
            <FlatButton
                href="https://github.com/ninalouw"
                target="_blank"
                label="See GitHub"
                primary={true}
                icon={<FontIcon className="muidocs-icon-custom-github" />}
              />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Skills;
