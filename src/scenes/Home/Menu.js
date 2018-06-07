import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {

  buttons() {
    return [
      {name: 'About me', 'link': '#'},
      {name: 'Contact', 'link': '#'},
      {name: 'Github', 'link': '#'}
    ];
  }

  render() {

    var rendMenu = this.buttons().map((menu) =>
      <li><a href={menu.link}>{menu.name}</a></li>  
    );

    return (      
        <div className="sidebar-menu show">
          <ul>{rendMenu}</ul>
        </div>
    );
  }
}

export default Menu;