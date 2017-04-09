import React from 'react';
import {Route, IndexRoute } from 'react-router';
import App from './components/app';
import Main from './components/main';
import About from './components/about';
import Projects from './components/projects';
import Education from './components/education';
import Contact from './components/contact';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Main} />
    <Route path="about" component={About} />
    <Route path="projects" component={Projects} />
    <Route path="education" component={Education}/>
    <Route path="contact" component={Contact} />
  </Route>
);
