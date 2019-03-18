import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import '../App/App.css';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 150,
    },
  },
};

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
        <hr width="50%"></hr>
        <div id="searchBar">
        <p id="selectHero">Hero:</p>
        <Select
        id="selector"
          value={this.state.hero}
          onChange={this.handleHero}
          label="Select Hero"
          inputProps={{
            name: 'category',
            id: 'category-simple'
          }}
          MenuProps={MenuProps}

        >
          {this.props.reduxStore.hero.map((hero) => (
            <MenuItem value={hero.id} key={hero.id}>
              {hero.name}
            </MenuItem>
          ))}
        </Select>
        <br></br>
        <Button id="searchBtn" variant="contained" color="primary" onClick={this.dispatchHero}>View Information</Button>
        <br></br>      
        </div>
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