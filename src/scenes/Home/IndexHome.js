import React, { Component } from 'react';
import MainMenu from './../../components/MainMenu/Menu';
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';
import './IndexHome.css';
import PageContent from './PageContent';

class IndexHome extends Component {
  render() {
    return (
      <div className="app">
        <MainMenu/>
        <Header/>
        <PageContent/>
        <Footer/>
      </div>
    );
  }
}

export default IndexHome;
