import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="app">
          <div className="content">
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
