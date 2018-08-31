import React, { Component } from 'react';
import { Button } from 'veratti-ui';
import './Navigation.scss';

class Navigation extends Component {
  render() {
    return (
      <nav className="navigation">
        <Button>Home</Button>
      </nav>
    );
  }
}

export default Navigation;
