import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from './components/App/App';
import NotFound from './components/App/NotFound';

import Home from './components/Home/Home';
import MainPage from './components/App/MainPage';
import More from './components/App/More';

import Map from './components/App/Map';
import WelcomePage from './components/App/WelcomePage';
import HelloWorld from './components/HelloWorld/HelloWorld';

// import './styles/mystyles.css';

render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={WelcomePage}/>
        <Route path= "/main" component={MainPage}/>
        <Route path= "/main" component={MainPage}/>
        <Route path= "/main:id" component={More}/>
        <Route path="/map" component={Map}/>
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
