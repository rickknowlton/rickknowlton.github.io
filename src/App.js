import React, { Component } from 'react';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import ParallaxBackground from './components/ParallaxBackground';
import ScrollTop from './components/ScrollTop';
import ThemeChange from './components/Themes';
import Browser from './components/Browser';
import Footer from './components/Footer';

class App extends Component {

  render() {
    return (
      <div className="dev-landing-page">
        <ThemeChange>
          <Browser except firefox>
            <ParallaxBackground />
          </Browser>
          <LandingPage />
          <AboutPage />
          <PortfolioPage />
          <ContactPage />
          <ScrollTop />
          <Footer />
        </ThemeChange>
      </div>
    );
  }
}

export default App;
