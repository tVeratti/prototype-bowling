import React, { Component } from 'react';
import { Button } from 'veratti-ui';
import Star from '../assets/svg/star';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>KC Bowling</h1>
        <Star className="header__deco" />
        <div className="header__details">
          <div itemScope itemType="http://schema.org/LocalBusiness">
            <span itemProp="address">1234 Bowling Ave, Kansas City, MO</span>
            <span itemProp="telephone">
              <Button href="tel:5555555555">555-555-5555</Button>
            </span>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
