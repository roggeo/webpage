import React, { Component } from 'react';
import MainMenu from './../../components/MainMenu/Menu';
import Footer from './../../components/Footer/Footer';
import logo from './../../resources/logo.svg';
import './IndexHome.css';
import PageContent from './PageContent';

class IndexHome extends Component {
  render() {
    return (
      <div className="app">
        <MainMenu/>
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
        </header>
        <PageContent/>
        <Footer/>
      </div>
    );
  }
}

export default IndexHome;
