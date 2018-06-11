import React, { Component } from 'react';
import MainMenu from './../../components/MainMenu/Menu';
import Footer from './../../components/Footer/Footer';
import logo from './../../resources/logo.svg';
import './IndexHome.css';

class IndexHome extends Component {
  render() {
    return (
      <div className="app">
        <MainMenu/>
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
        </header>
        <Footer/>
      </div>
    );
  }
}

export default IndexHome;
