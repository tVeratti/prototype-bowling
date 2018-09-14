import React, { Component } from 'react';
import ipsum from 'lorem-ipsum';

import { Button, PromoGrid } from 'veratti-ui';
import ImgPlacholder from '../assets/images/img-placeholder.png';
import Ball from '../assets/svg/ball';
import './Home.scss';

class Home extends Component {
  render() {
    const panels = [...Array(6)].map(_ => ({
      title: 'Lorem Ipsum',
      subtitle: 'Dolor sit amet.',
      button: 'Ipsum',
      image: ImgPlacholder
    }));

    return (
      <div className="home">
        <div className="center">
          <h2>Web Design Demo</h2>
          <div className="paragraph center">
            This site is not for a real venue. This is a technical demo by
            <Button href="https://dev.veratti.co" secondary>
              Veratti Web Development.
            </Button>
            If this inspires you and your business or hobby needs a modern
            website then
            <Button href="https://dev.veratti.co/contact" secondary>
              let's talk!
            </Button>
          </div>
          <div className="separator" />
          <Button bg>Lorem Ipsum</Button>
          <div className="separator" />
        </div>

        <div className="home__promo">
          <PromoGrid panels={panels} />
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
