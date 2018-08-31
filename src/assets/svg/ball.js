import React from 'react';

const Ball = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="100%"
    height="100%"
    viewBox="0 0 200 200"
    className="ball"
    {...props}
  >
    {/* <path
      d="M148.5,0C66.617,0,0,66.617,0,148.5S66.617,297,148.5,297S297,230.383,297,148.5S230.383,0,148.5,0z M148.5,115.375
				c-10.373,0-18.813-8.439-18.813-18.813S138.127,77.75,148.5,77.75s18.813,8.439,18.813,18.813S158.873,115.375,148.5,115.375z
		 		M183.125,167.313c-10.373,0-18.813-8.439-18.813-18.813s8.439-18.813,18.813-18.813s18.813,8.439,18.813,18.813
				S193.498,167.313,183.125,167.313z M217.75,115.375c-10.373,0-18.813-8.439-18.813-18.813s8.439-18.813,18.813-18.813
				s18.813,8.439,18.813,18.813S228.123,115.375,217.75,115.375z"
    /> */}
    <circle cx="100" cy="100" r="100" />
    <circle style={{ fill: 'black' }} cx="50" cy="50" r="10" />
    <circle style={{ fill: 'black' }} cx="100" cy="40" r="10" />
    <circle style={{ fill: 'black' }} cx="85" cy="85" r="10" />
  </svg>
);

export default Ball;
