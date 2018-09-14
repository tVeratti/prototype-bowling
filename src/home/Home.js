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
                subtitle: 'Birthdays, Anniversaries, & more',
                button: 'Plan Party',
                image: 'https://picsum.photos/700/600/?random'
              },
              {
                title: 'Leagues',
                subtitle: 'Teams for all skill levels',
                button: 'Register Player',
                image: 'https://picsum.photos/900/600/?random'
              },
              {
                title: 'Tournaments',
                subtitle: 'Win prizes and bragging rights',
                button: 'Register Team',
                image: 'https://picsum.photos/500/600/?random'
              },
              {
                title: 'Events',
                subtitle: 'Special games and themes',
                button: 'Reserve Group',
                image: 'https://picsum.photos/730/600/?random'
              },
              {
                title: 'Menu',
                subtitle: 'Tastey treats',
                button: 'Yum Yum',
                image: 'https://picsum.photos/850/600/?random'
              },
              {
                title: 'Careers',
                subtitle: 'Now hiring',
                button: 'See Positions',
                image: 'https://picsum.photos/650/600/?random'
              }
            ]}
          />
        </div>
      </div>
    );
  }
}

export default Home;
