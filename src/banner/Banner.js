import React, { Component } from 'react';
import { Parallax } from 'veratti-ui';

import Ball from '../assets/svg/bowling';
import Pin from '../assets/svg/bowling-pin';

import './Banner.scss';

class Banner extends Component {
  renderRow(layer) {
    const pins = [...Array(layer)];
    return (
      <div className="banner__row">
        <Parallax speed={0.5 / layer}>
          {pins.map(_ => (
            <Pin />
          ))}
        </Parallax>
      </div>
    );
  }
  render() {
    return (
      <div className="banner">
        <div className="banner__ball">
          <Parallax speed={0.6}>
            <Ball />
          </Parallax>
        </div>

        <div className="banner__pins">
          {this.renderRow(4)}
          {this.renderRow(3)}
          {this.renderRow(2)}
          {this.renderRow(1)}
        </div>
      </div>
    );
  }
}

export default Banner;
