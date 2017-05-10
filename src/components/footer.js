import React, { Component } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import FontIcon from 'material-ui/FontIcon';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import {Row, Col} from 'react-materialize';

class Footer extends Component {
    render () {
      const iconStyles = {
          marginRight: 24,
        };
        return (
          <div>
            <Row className="footer">
                <Col s={3} m={2} l={2} className="footer-elem">
                  <FontIcon className="material-icons" style={iconStyles}>home</FontIcon><p>Get in Touch</p>
                </Col>
                <Col s={3} m={2} l={2} className="footer-elem">
                  <FontIcon className="material-icons" style={iconStyles} color={red500}>phone</FontIcon><p>+1 604-405-6789</p>
                </Col>
                <Col s={3} m={2} l={2} className="footer-elem">
                  <FontIcon className="material-icons" style={iconStyles} color={yellow500}>email</FontIcon><p>info@hellothere.com</p>
                </Col>
                <Col s={1} m={2} l={2} className="footer-elem">
                  <a href="https://www.linkedin.com/in/ninamaelouw/">
                    <FontAwesome className="fa-icon" name='linkedin' size='2x'/>
                  </a>
               </Col>
               <Col s={1} m={2} l={2} className="footer-elem">
                 <a href="https://www.linkedin.com/in/ninamaelouw/">
                   <FontAwesome className="fa-icon" name='twitter' size='2x'/>
                 </a>
              </Col>
              <Col s={1} m={2} l={2} className="footer-elem">
                <a href="https://www.linkedin.com/in/ninamaelouw/">
                  <FontAwesome className="fa-icon" name='github' size='2x'/>
                </a>
             </Col>
          </Row>
          </div>
        );
    }
}

export default Footer;
