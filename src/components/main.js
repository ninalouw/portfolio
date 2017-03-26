import React, { Component } from 'react';
import { connect } from 'react-redux';
import Avatar from 'material-ui/Avatar';
import FontAwesome from 'react-fontawesome';

class Main extends Component {
    render() {
    return (
      <div className="main">
        <div className="heading">
            <h4>My name is</h4>
            <h1>Nina Louw</h1>
            <h4>and I'm a web developer</h4>
              <div>
                <a href="https://github.com/ninalouw">
                  <FontAwesome name='github' size='2x' style={{ color: 'black', margin: '7px' }} />
                </a>
                <a href="https://twitter.com/ninamaelouw">
                  <FontAwesome name='twitter' size='2x' style={{ color: 'black', margin: '7px' }}  />
                </a>

                <a href="https://medium.com/@ninamaelouw">
                  <FontAwesome name='medium' size='2x' style={{ color: 'black', margin: '7px' }}  />
                </a>
                <a href="https://www.linkedin.com/in/ninamaelouw/">
                  <FontAwesome name='linkedin' size='2x' style={{ color: 'black', margin: '7px' }}  />
                </a>
              </div>
        </div>
        <div className="about-me">
              <p>
                Lorem ipsum dolor sit amet, curae turpis rutrum diam orci neque egestas, orci egestas, fringilla curabitur luctus, magnis metus nostra. Suscipit pellentesque, porttitor rutrum nunc nullam integer. Congue id aliquam libero sit per, cursus ac, ut id volutpat viverra pede ultrices, arcu per sit aenean neque, commodo urna. Molestie lacus odio neque eum urna, etiam varius sed luctus feugiat, urna euismod placerat vitae, curabitur blandit non ullamcorper eros lobortis, ipsum parturient proin nonummy eros. Eros dolor cupiditate magna scelerisque dolor.
              </p>
        </div>
      </div>
    );
  }
}

export default Main;
