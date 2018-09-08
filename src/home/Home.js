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
        <div className="separator" />
        <h3>It's not a real place!</h3>
        <div className="separator" />

        <div>{ipsum({ count: 1, units: 'paragraphs' })}</div>
        <div className="separator" />
        <div className="separator" />
        <div className="separator" />
        <PromoGrid
          panels={[
            {
              title: 'Parties',
              button: 'Plan Party',
              image: <img src="https://dummyimage.com/600x600/0cce6b/2f3942" />
            },
            {
              title: 'Leagues',
              button: 'Register',
              image: <img src="https://dummyimage.com/600x600/aaa/2f3942" />
            },
            {
              title: 'Tournaments',
              button: 'View Schedule',
              image: <img src="https://dummyimage.com/600x600/306bac/2f3942" />
            },
            {
              title: 'Events',
              button: 'View Schedule',
              image: <img src="https://dummyimage.com/600x600/0cce6b/2f3942" />
            },
            {
              title: 'Menu',
              image: <img src="https://dummyimage.com/600x600/aaa/2f3942" />
            },
            {
              title: 'Careers',
              image: <img src="https://dummyimage.com/600x600/ef476f/2f3942" />
            }
          ]}
        />
      </div>
    );
  }
}

export default Home;
