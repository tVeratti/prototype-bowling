import React, { Component } from 'react';
import { Button } from 'veratti-ui';
import './Navigation.scss';

class Navigation extends Component {
  render() {
    return (
      <nav className="navigation">
        <ul>
          <li>
            <Button>Home</Button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
