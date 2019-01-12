import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import JSDrumKit from '../projects/JsDrumKit';
import cssClock from '../projects/cssClock';

class Pages extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/day/1" component={JSDrumKit} />
          <Route exact path="/day/2" component={cssClock} />
        </Switch>
      </HashRouter>
    );
  }
}

export default Pages;
