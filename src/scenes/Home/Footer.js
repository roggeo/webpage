import React, { Component } from 'react';

class Footer extends Component {
  render() {
    
    return (      
        <footer className="footer-content">
          <p>{new Date().toLocaleTimeString()}</p>
        </footer>
    );
  }
}

export default Footer;