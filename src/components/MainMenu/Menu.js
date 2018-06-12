import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import { Tooltip } from 'reactstrap';
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
          <a id="btn-show-menu" href="javascript:;" className={(this.state.addClass)? 'menu-fixed':''} onClick={this.handleClick.bind(this)}>
            <i className={iconBtn.join(' ')}></i>
          </a>
          <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="btn-show-menu" toggle={this.hanldeToolTips}>
            on/off menu
          </Tooltip>
          <div className={boxClass.join(' ')}>
            <ul>
              <li><a href="./"><Icon name='home'/> Home</a></li>
              <li><a href="./about"><Icon name='user-astronaut'/> About me</a></li>
              <li><a href="./contact"><Icon name='comment'/> Contact</a></li>
              <li><a href="https://github.com/roggeo"><i className="fab fa-github"></i> Github</a></li>
              <li><a href="https://github.com.br/roggeo/webpage"><Icon name='code'/> Code of this</a></li>
            </ul>
          </div>
        </div>
    );
  }

}

export default Menu;