import React, { Component } from 'react';

import Star from '../assets/svg/star';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>KC Bowling</h1>
        <Star />
      </header>
    );
  }
}

export default Header;
