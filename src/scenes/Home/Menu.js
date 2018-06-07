import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
  render() {
    const mainMenu = ['Home', 'About me'];
    const mainMenuItems = mainMenu.map((menu) =>
      <li>{menu}</li>
    ); 
    return (      
        <side className="sidebar-menu">
          <ul>{mainMenuItems}</ul>
        </side>
    );
  }
}

export default Menu;