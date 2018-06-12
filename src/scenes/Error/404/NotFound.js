import React, { Component } from 'react';
import MainMenu from './../../../components/MainMenu/Menu';
import Header from './../../../components/Header/Header';
import Footer from './../../../components/Footer/Footer';
import PageContent from './PageContent';
import './NotFound.css';

class NotFound extends Component {
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

export default NotFound;
