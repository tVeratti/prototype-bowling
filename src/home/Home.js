import React, { Component } from 'react';
import ipsum from 'lorem-ipsum';

import { Button, PromoGrid } from 'veratti-ui';

// Images
import candles from '../assets/images/candles.jpg';
import bowlers from '../assets/images/bowlers.jpg';
import strike from '../assets/images/lane.jpg';
import hands from '../assets/images/hands.jpg';
import party from '../assets/images/party.jpg';
import food from '../assets/images/food.jpg';

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
                image: candles
              },
              {
                title: 'Leagues',
                subtitle: 'Teams for all skill levels',
                button: 'Register Player',
                image: bowlers
              },
              {
                title: 'Tournaments',
                subtitle: 'Win prizes and bragging rights',
                button: 'Register Team',
                image: hands
              },
              {
                title: 'Events',
                subtitle: 'Special games and themes',
                button: 'Reserve Group',
                image: party
              },
              {
                title: 'Menu',
                subtitle: 'Tastey treats',
                button: 'Yum Yum',
                image: food
              },
              {
                title: 'Careers',
                subtitle: 'Now hiring',
                button: 'See Positions',
                image: strike
              }
            ]}
          />
        </div>
      </div>
    );
  }
}

export default Home;
