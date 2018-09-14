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
        <div className="center">
          <h2>Web Design Demo</h2>
          <div className="paragraph center">
            This site is not for a real venue. This is a technical showcase and
            portfolio piece for
            <Button href="https://dev.veratti.co" secondary>
              Veratti Web Development.
            </Button>
            If you like what you see and want similar work for your business,
            then
            <Button href="https://dev.veratti.co/contact" secondary>
              let's talk!
            </Button>
          </div>
          <div className="separator" />
          <Button bg>Make Reservation</Button>
          <div className="separator" />
        </div>

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
                title: 'Employment',
                subtitle: 'Now hiring',
                button: 'See Positions',
                image: strike
              }
            ]}
          />
        </div>
        <div className="separator" />
        <div className="home__about">
          <div>
            <h3>Lorem Ipsum</h3>
            <div className="paragraph">
              {ipsum({ count: 2, units: 'sentences' })}
            </div>
            <Button outline secondary>
              Ipsum
            </Button>
          </div>

          <div>
            <h3>Lorem Ipsum</h3>
            <div className="paragraph">
              {ipsum({ count: 2, units: 'sentences' })}
            </div>
            <Button outline secondary>
              Ipsum
            </Button>
          </div>

          <div>
            <h3>Lorem Ipsum</h3>
            <div className="paragraph">
              {ipsum({ count: 2, units: 'sentences' })}
            </div>
            <Button outline secondary>
              Ipsum
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
