import React, { Component } from 'react';
import { Button } from 'veratti-ui';

import Ball from '../assets/svg/ball';
import './Navigation.scss';

class Navigation extends Component {
  render() {
    return (
      <nav className="navigation">
        <ul className="navigation__links">
          <li>
            <Button>
              <Ball width="100%" height="40px" />
            </Button>
          </li>
          <li>
            <Button>
              <Ball width="100%" height="40px" />
            </Button>
          </li>
          <li>
            <Button>
              <Ball width="100%" height="40px" />
            </Button>
          </li>
          <li>
            <Button>
              <Ball width="100%" height="40px" />
            </Button>
          </li>
          <li>
            <Button>
              <Ball width="100%" height="40px" />
            </Button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
