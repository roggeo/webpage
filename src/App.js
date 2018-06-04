import React, { Component } from 'react';
import MainMenu from './Menu';
import Footer from './Footer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
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

export default App;
