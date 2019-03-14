import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';
const request = require('request');
const list = require('./list.jpg')

class Search extends Component {

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

//         fetchAna = (event) => {
//         request({url: `https://overwatch-api.net/api/v1/hero/1}`, json: true}, function(err, res, json) {
//   if (err) {
//     throw err;
//   }
//   console.log(json);
// });
//     }

    render() {
        return (
            <div className="body">
                <center>
                    <hr></hr>
                    <p>Select a hero from the dropdown or click on their respective image below to view detailed stats!</p>
                    <select value={this.state.hero} onChange={this.handleHero}>Select Hero
                    <option value={1}>Ana</option>
                    <option value={2}>Bastion</option>
                    <option value={3}>D.Va</option>
                    </select>
                    <button onClick={this.dispatchHero}>View Information</button>
                    <br></br>
                    {/* <img src={list} /> */}
                </center>
            </div>
        );
    }
}

const mapStateToProps = reduxStore => {
    return {
      reduxStore
    }
  }
export default connect(mapStateToProps)(Search);