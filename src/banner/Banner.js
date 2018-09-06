import React, { PureComponent } from 'react';
import { Parallax } from 'veratti-ui';

import Pin from '../assets/svg/pin';

import './Banner.scss';

class Banner extends PureComponent {
  renderRow(i, layer, scroll) {
    let delay = layer / 2 + scroll / 50;
    delay = Math.min(delay, 0) + 's';

    return <Pin key={i} style={{ animationDelay: delay }} />;
  }

  renderPins(layer) {
    const pins = [...Array(layer)];

    return (
      <Parallax
        speed={0.7 - layer / 10}
        render={(top, scroll) => (
          <div className="banner__row" style={{ top }}>
            {pins.map((_, i) => this.renderRow(i, layer, scroll))}
          </div>
        )}
      />
    );
  }

  render() {
    return (
      <div className="banner">
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
