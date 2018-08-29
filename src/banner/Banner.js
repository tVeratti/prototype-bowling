import React, { Component } from 'react';
import { Parallax } from 'veratti-ui';

import Ball from '../assets/svg/bowling';
import Pin from '../assets/svg/bowling-pin';

import './Banner.scss';

class Banner extends Component {
  renderPins(layer) {
    const pins = [...Array(layer)];
    return (
      <div className="banner__row">
        <Parallax
          speed={0.5 / layer}
          render={top => pins.map((_, i) => <Pin key={i} style={{ top }} />)}
        />
      </div>
    );
  }

  render() {
    return (
      <div className="banner">
        <Parallax speed={0.6} render={top => <Ball style={{ top }} />} />

        {/* Pins */}
        <div className="banner__pins">
          {this.renderPins(4)}
          {this.renderPins(3)}
          {this.renderPins(2)}
          {this.renderPins(1)}
        </div>
      </div>
    );
  }
}

export default Banner;
