import React from 'react';

const Triangle = props => (
  <svg
    height="100%"
    width="100%"
    viewBox="0 0 400 200"
    className="triangle"
    {...props}
  >
    <polygon points="200,0 0,200 400,200" className="triangle" {...props} />
  </svg>
);

export default Triangle;
