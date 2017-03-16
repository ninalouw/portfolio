import React, { Component } from 'react';
import { connect } from 'react-redux';
import Github from 'material-ui/svg-icons/hardware/laptop-mac';
import LinkedIn from 'material-ui/svg-icons/action/face';
import Medium from 'material-ui/svg-icons/action/favorite';
import Twitter from 'material-ui/svg-icons/communication/chat';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

class Main extends Component {

  render() {
    return (
      <div>
        <div className="container">
            <h4>My name is</h4>
            <h1>Nina Louw</h1>
            <h4>and I'm a web developer</h4>
              <div>
                <a href="https://github.com/ninalouw">
                  <Github style={{ height: 40, width: 40, margin: 7 }} />
                </a>
                <a href="https://twitter.com/ninamaelouw">
                  <Twitter style={{ height: 40, width: 40, margin: 7 }} />
                </a>
                <a href="https://medium.com/@ninamaelouw">
                  <Medium style={{ height: 40, width: 40, margin: 7 }} />
                </a>
                <a href="https://www.linkedin.com/in/ninamaelouw/">
                  <LinkedIn style={{ height: 40, width: 40, margin: 7 }} />
                </a>
              </div>
        </div>
        <div className="section" id="about">
          <div className="row">
            <Avatar
                src='https://avatars1.githubusercontent.com/u/17684394?v=3&amp;s=460'
                size={150}
                style={{margin: 5, border: 0}} />
            <div className="col xs12 s10">
              <p>
                Lorem ipsum dolor sit amet, curae turpis rutrum diam orci neque egestas, orci egestas, fringilla curabitur luctus, magnis metus nostra. Suscipit pellentesque, porttitor rutrum nunc nullam integer. Congue id aliquam libero sit per, cursus ac, ut id volutpat viverra pede ultrices, arcu per sit aenean neque, commodo urna. Molestie lacus odio neque eum urna, etiam varius sed luctus feugiat, urna euismod placerat vitae, curabitur blandit non ullamcorper eros lobortis, ipsum parturient proin nonummy eros. Eros dolor cupiditate magna scelerisque dolor.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
