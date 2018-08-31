import React, { Component } from 'react';
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
      <div className="banner__row">
        <Parallax
          speed={0.5 - layer * 0.1}
          render={top => {
            const scroll = (top && top.replace('px', '')) || 1;
            const animationDelay = scroll / 100 + 's';

            return pins.map((_, i) => (
              <Pin key={i} style={{ top, animationDelay }} />
            ));
          }}
        />
      </div>
    );
  }

  render() {
    const { mounted } = this.state;

    return (
      <div className="banner">
        <div className="banner__graphics">
          {/* Ball  */}
          <Parallax speed={0.6} render={top => <Ball style={{ top }} />} />

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
