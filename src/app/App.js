import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './ThemeProvider';

import Header from '../header/Header';
import Banner from '../banner/Banner';
import Navigation from '../navigation/Navigation';
import Routes from '../routes/Routes';
import Footer from '../footer/Footer';

import './App.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ThemeProvider>
          <div className="app">
            <Header />
            <Banner />
            <div className="app__content">
              <Navigation />
              <Routes />
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
