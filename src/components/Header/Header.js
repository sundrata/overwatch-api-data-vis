import React, { Component } from 'react';
import '../App/App.css';
const title = require('./title.png')

class Header extends Component {
  render() {
    return (
      <div className="head">
      <img src={title}></img>
      </div>
    );
  }
}

export default Header;