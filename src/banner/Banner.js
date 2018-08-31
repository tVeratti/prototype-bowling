import React, { PureComponent } from 'react';
import { Parallax } from 'veratti-ui';

import Ball from '../assets/svg/ball';
import Pin from '../assets/svg/pin';

import './Banner.scss';

class Banner extends PureComponent {
  renderPins(layer, animationDelay) {
    const pins = [...Array(layer)];

    return (
      <div className="banner__row">
        {pins.map((_, i) => (
          <Pin key={i} style={{ animationDelay }} />
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="banner">
        <div className="banner__graphics">
          {/* Ball  */}
          <Parallax speed={0.6} render={top => <Ball style={{ top }} />} />

          {/* Pins */}
          <Parallax
            speed={0.5}
            render={(top, scroll) => {
              const delay = scroll / 100 + 's';

              return (
                <div className="banner__pins" style={{ top }}>
                  {this.renderPins(4, delay)}
                  {this.renderPins(3, delay)}
                  {this.renderPins(2, delay)}
                  {this.renderPins(1, delay)}
                </div>
              );
            }}
          />
        </div>
      </div>
    );
  }
}

export default Banner;
