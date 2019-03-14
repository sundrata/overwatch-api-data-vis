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
          hero : event.target.value }, this.dispatchHero);
        console.log('state set');
      }

    dispatchHero () {
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
                    <div className="bodyInfo">
                        <h1>Welcome To Sundrata's Overwatch Hero GUI!</h1>
                        <h3>Select a hero below to view additional information!</h3>
                    </div>
                    {/* <button onClick={() => this.fetchAna()}></button> */}
                    <hr></hr>
                    <select value={this.state.hero} onChange={this.handleHero}>Select Hero
                    <option value={1}>Ana</option>
                    <option value={2}>Bastion</option>
                    <option value={3}>D.Va</option>
                    </select><br></br>
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