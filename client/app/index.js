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
import MyPage from './components/App/MainPage';
import Home from './components/Home/Home';

import HelloWorld from './components/HelloWorld/HelloWorld';

import './styles/mystyles.css';
import WelcomePage from "./components/App/WelcomePage";

render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={WelcomePage}/>
        <Route path="/list" component={MyPage}/>

        <Route path="/helloworld" component={HelloWorld}/>
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
