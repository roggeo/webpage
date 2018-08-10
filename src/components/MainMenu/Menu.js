import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import { Tooltip } from 'reactstrap';
import { Link } from 'react-router-dom'
import './Menu.css';


class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      addClass: false,
      tooltipOpen: false
    }
    this.hanldeToolTips = this.hanldeToolTips.bind(this);
  }

  handleClick(){
    this.setState({addClass: !this.state.addClass});
  }

  hanldeToolTips() {
    this.setState({tooltipOpen: !this.state.tooltipOpen});
  }

  render() {

    let boxClass = ["sidebar-menu"];
    let iconBtn = ["fa"];

    if (this.state.addClass) {
      boxClass.push('show');
      iconBtn.push('fa-times');
    } else {
      iconBtn.push('fa-bars');
    }

    return (
        <div>
          <span id="btn-show-menu" className={(this.state.addClass)? 'menu-fixed':''} onClick={this.handleClick.bind(this)}>
            <i className={iconBtn.join(' ')}></i>
          </span>
          <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="btn-show-menu" toggle={this.hanldeToolTips}>
            on/off menu
          </Tooltip>
          <div className={boxClass.join(' ')}>
            <ul>
              <li><Link to="/"><Icon name='home'/> Home</Link></li>
              <li><Link to="/about"><Icon name='user-astronaut'/> About me</Link></li>
              <li><Link to="./contact"><Icon name='comment'/> Contact</Link></li>
              <li><a href="https://github.com/roggeo"><i className="fab fa-github"></i> Github</a></li>
              <li><a href="https://github.com/roggeo/webpage"><Icon name='code'/> Code of this</a></li>
            </ul>
          </div>
        </div>
    );
  }

}

export default Menu;