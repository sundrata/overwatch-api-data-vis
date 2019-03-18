import React, { Component } from 'react';
import './App.css';
import Body from '../Body/Body';
import Header from '../Header/Header';
import { Provider }from 'react-redux';

class App extends Component {
  render() {
    return (
      //Body is inside of App because I had issues with Provider early on, kind of unecessary.
      <>
      <Header />
      <div className="App">
        <header className="App-header">
          <Body />
          </header>
      </div>
      </>
    );
  }
}

export default App;
