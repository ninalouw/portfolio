import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './header';
import Footer from './footer';
import injectTapEventPlugin from 'react-tap-event-plugin';

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="app">
          <div className="app-content">
          <Header/>
            {this.props.children}
          <Footer />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

injectTapEventPlugin();
