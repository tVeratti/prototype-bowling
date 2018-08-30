import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Parallax } from 'veratti-ui';

import Ball from '../assets/svg/ball';
import Pin from '../assets/svg/pin';

import './Banner.scss';

class Banner extends Component {
  state = { mounted: false };

  componentDidMount() {
    this.setState({ mounted: true });
  }

  renderPins(layer) {
    const { mounted } = this.state;
    const pins = [...Array(layer)];

    return (
      <CSSTransition in={mounted} timeout={layer * 200} classNames="row">
        <div className="banner__row">
          <Parallax
            speed={0.55 - layer * 0.1}
            render={top => pins.map((_, i) => <Pin key={i} style={{ top }} />)}
          />
        </div>
      </CSSTransition>
    );
  }

  render() {
    const { mounted } = this.state;

    return (
      <div className="banner">
        {/* Background */}
        <Parallax
          speed={0.07}
          render={top => <div style={{ top }} className="banner__background" />}
        />

        <div className="banner__graphics">
          {/* Ball */}
          <Parallax
            speed={0.5}
            render={top => (
              <CSSTransition in={mounted} timeout={1000} classNames="ball">
                <Ball style={{ top }} />
              </CSSTransition>
            )}
          />

          {/* Pins */}
          <div className="banner__pins">
            {this.renderPins(4)}
            {this.renderPins(3)}
            {this.renderPins(2)}
            {this.renderPins(1)}
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
