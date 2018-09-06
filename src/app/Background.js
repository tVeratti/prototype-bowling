import React from 'react';
import { Parallax } from 'veratti-ui';

import './Background.scss';

const Background = props => (
  <Parallax
    speed={0.1}
    render={(top, scroll) => (
      <div className="background" style={{ opacity: 1 - scroll / -70 }} />
    )}
  />
);

export default Background;
