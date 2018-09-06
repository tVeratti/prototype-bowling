import React, { Component } from 'react';
import ipsum from 'lorem-ipsum';
import { Button } from 'veratti-ui';

import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h2>Imaginary Bowling</h2>
        <h3>It's not a real place!</h3>

        <div>{ipsum({ count: 1, units: 'paragraphs' })}</div>
      </div>
    );
  }
}

export default Home;
