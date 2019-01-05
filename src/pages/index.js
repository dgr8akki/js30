import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './landingPage';
import JSDrumKit from '../projects/JsDrumKit';

class Pages extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/day/1" component={JSDrumKit} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Pages;
