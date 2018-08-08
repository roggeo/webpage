import React, { Component } from 'react';
import MainMenu from './../../components/MainMenu/Menu';
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';
import './IndexContact.css';
import PageContent from './PageContent';
import HeadSeo from './../../components/Seo/HeadSeo';

class IndexContact extends Component {
  render() {
    return (
      <div className="app">
        <HeadSeo
          title="Contact"
          description="Do you some question contact me."
          uri = "contact"
          />
        <MainMenu/>
        <Header/>
        <PageContent/>
        <Footer/>
      </div>
    );
  }
}

export default IndexContact;
