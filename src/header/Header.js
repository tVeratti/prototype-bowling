import React, { Component } from 'react';

import './Header.scss';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>Parallax Bowling</h1>
        <h2>1234 NW Bowling Ave., Kansas City, MO 64154</h2>
      </header>
    );
  }
}

export default Header;
