import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../home/Home';

class Routes extends Component {
  render() {
    return (
      <Route
        render={({ location }) => (
          <Switch location={location}>
            {/* Routing Main Views */}
            <Route exact path="/" component={Home} />
          </Switch>
        )}
      />
    );
  }
}

export default Routes;
