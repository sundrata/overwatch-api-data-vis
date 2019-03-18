import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import '../App/App.css';

class Search extends Component {

  componentDidMount() {
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
      hero: event.target.value
    });
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
        <Select
          value={this.state.hero}
          onChange={this.handleHero}
          label="Select Hero"
          inputProps={{
            name: 'category',
            id: 'category-simple'
          }}
        >
          {this.props.reduxStore.hero.map((hero) => (
            <MenuItem value={hero.id} key={hero.id}>
              {hero.name}
            </MenuItem>
          ))}
        </Select>
        {/* <select value={this.state.hero} onChange={this.handleHero}>Select Hero
                    <option value={1}>Ana</option>
                    <option value={2}>Bastion</option>
                    <option value={3}>D.Va</option>
                    </select> */}
        <Button onClick={this.dispatchHero}>View Information</Button>
        <br></br>
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