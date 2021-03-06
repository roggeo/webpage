import React, { Component } from 'react';
import MainMenu from './../../components/MainMenu/Menu';
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';
import './IndexHome.css';
import PageContent from './PageContent';
import HeadSeo from './../../components/Seo/HeadSeo';
import MainBanner from './../../components/Banner/MainBanner';


class IndexHome extends Component {
  render() {
    return (
      <div className="app">
        <HeadSeo/>
        <MainMenu/>
        <Header/>
        <MainBanner/>
        <PageContent/>
        <Footer/>
      </div>
    );
  }
}

export default IndexHome;
