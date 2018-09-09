import React, { Component } from 'react';
import ipsum from 'lorem-ipsum';
import { Button, PromoGrid } from 'veratti-ui';

import Ball from '../assets/svg/ball';
import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h2>Imaginary Bowling</h2>
        <h3>It's not a real place!</h3>
        <div className="separator" />

        <div>{ipsum({ count: 1, units: 'paragraphs' })}</div>
        <div className="separator" />
        <div className="separator" />
        <div className="separator" />

        <div className="home__promo">
          <PromoGrid
            panels={[
              {
                title: 'Parties',
                button: 'Plan',
                image: <img src="https://picsum.photos/700/600/?random" />
              },
              {
                title: 'Leagues',
                button: 'Register',
                image: <img src="https://picsum.photos/900/600/?random" />
              },
              {
                title: 'Tournaments',
                button: 'Calendar',
                image: <img src="https://picsum.photos/500/600/?random" />
              },
              {
                title: 'Events',
                button: 'Schedule',
                image: <img src="https://picsum.photos/730/600/?random" />
              },
              {
                title: 'Menu',
                image: <img src="https://picsum.photos/850/600/?random" />
              },
              {
                title: 'Careers',
                image: <img src="https://picsum.photos/650/600/?random" />
              }
            ]}
          />
        </div>
      </div>
    );
  }
}

export default Home;
