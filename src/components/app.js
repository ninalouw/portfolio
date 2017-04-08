import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="app">
          <Header />
          <div className="app-content">
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
