import React from 'react';
import { Route , IndexRoute } from 'react-router';
import App from './components/app';
import HomePage from './components/homepage';
import Projects from './components/projects';



export default (
  <Route path="/" component={App} >
    <IndexRoute component={HomePage} />    
    <Route path="/proyectos" component={Projects} />

  </Route>
);
