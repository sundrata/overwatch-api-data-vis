import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';
const request = require('request');
const list = require('./list.jpg')

class Search extends Component {

  componentDidMount(){
    this.props.dispatch({
      type: 'GET_HEROS'
    });
    console.log('dispatched')
  }

    state = {
        hero: 0
    }

    handleHero = (event) => {
        this.setState({
          hero : event.target.value });
        console.log('state set');
      }

    dispatchHero = () => {
        this.props.dispatch({
            type: 'GET_HERO',
            payload: this.state.hero
          });
          console.log('dispatched')
    }

    render() {
        return (
                <center>
                    <p>Select a hero from the dropdown or click on their respective image below to view detailed stats!</p>
                    <hr></hr>
                    <select value={this.state.hero} onChange={this.handleHero}>Select Hero
                    <option value={1}>Ana</option>
                    <option value={2}>Bastion</option>
                    <option value={3}>D.Va</option>
                    </select>
                    <button onClick={this.dispatchHero}>View Information</button>
                    <br></br>
                    {/* {JSON.stringify([this.props.reduxStore.hero])} */}
                    </center>
        );
    }
}

const mapStateToProps = reduxStore => {
    return {
      reduxStore
    }
  }
export default connect(mapStateToProps)(Search);