import React, { Component } from 'react';
import logo from './ow.svg';
import '../App/App.css';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Select from '../Select/Select'
import { Provider }from 'react-redux'
class Body extends Component {
    
  render() {
    return (
        //this is where all the imports are for DOM
      <>
      <div className="App">
      <div className="body">
      <Search />
      <Select /> 
      </div>    
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://www.playoverwatch.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Official Overwatch Site
          </a>         
        </div>
      </div>
      </>
    );
  }
}

export default Body;
