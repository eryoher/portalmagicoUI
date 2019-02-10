import React from 'react';
import { Route , IndexRoute } from 'react-router';
import App from './components/app';
import HomePage from './components/homepage';
import Nosotros from './components/nosotros';
import Projects from './components/projects';



export default (
  <Route path="/" component={App} >
    <IndexRoute component={HomePage} />    
    <Route path="/nosotros" component={Nosotros} />
    <Route path="/proyectos" component={Projects} />

  </Route>
);
