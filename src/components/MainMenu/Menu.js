import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {addClass: false}
  }

  handleClick(){
    this.setState({addClass: !this.state.addClass});
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
          <a id="btn-show-menu" href="javascript:;" onClick={this.handleClick.bind(this)}>
            <i className={iconBtn.join(' ')}></i>
          </a>
          <div className={boxClass.join(' ')}>
            <ul>
              <li><a href="#"><i className="fa fa-home"></i> Home</a></li>
              <li><a href="#"><i className="fa fa-user-astronaut"></i> About me</a></li>
              <li><a href="#"><i className="fa fa-comment"></i> Contact</a></li>
              <li><a href="#"><i className="fab fa-github"></i> Github</a></li>
              <li><a href="#"><i className="fa fa-code"></i> Code of this</a></li>
            </ul>
          </div>
        </div>
    );
  }

}

export default Menu;