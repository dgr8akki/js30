import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import JSDrumKit from '../projects/JsDrumKit';

class Pages extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/day/1" component={JSDrumKit} />
        </Switch>
      </HashRouter>
    );
  }
}

export default Pages;
