import React, { Component } from 'react';
import classnames from 'classnames';
import { Button } from 'veratti-ui';
import Star from '../assets/svg/star';
import './Header.scss';

class Header extends Component {
  state = { sticky: false };

  componentDidMount() {
    this.onScroll();
    document.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    document, removeEventListener('scroll', this.onScroll);
  }

  onScroll = ev => {
    const { sticky } = this.state;
    const { pageYOffset } = window;
    const { offsetTop } = document.querySelector('.app__content');
    const above = pageYOffset + 100 > offsetTop;

    if (above && !sticky) this.setState({ sticky: true });
    else if (!above && sticky) this.setState({ sticky: false });
  };

  render() {
    const headerClassNames = classnames('header', {
      ['header--sticky']: this.state.sticky
    });

    return (
      <header className={headerClassNames}>
        <h1>KC Bowling</h1>
        <div className="header__deco">
          <Star />
          <Star />
          <Star />
        </div>
        <div
          className="header__details"
          itemScope
          itemType="http://schema.org/LocalBusiness"
        >
          <span itemProp="address">1234 Bowling Ave, Kansas City, MO</span>
          <span itemProp="telephone">
            <Button href="tel:5555555555" secondary>
              555-555-5555
            </Button>
          </span>
        </div>
      </header>
    );
  }
}

export default Header;
