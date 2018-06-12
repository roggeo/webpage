import React, { Component } from 'react';
import GetCodeButton from '../GetCodeButton/GetCodeButton';
import './Footer.css';

class Footer extends Component {
  render() {
    
    return (
        <footer>
          <GetCodeButton/>
          <div className="footer-wrap">
            <p>Built with ReactJS</p>
            <p>&copy; 2018. By Roggeo Geovani</p>
          </div>
        </footer>
    );

  }
}

export default Footer;