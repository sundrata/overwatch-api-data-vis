import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';

class Select extends Component {
  render() {
    return (
      <div>
        {this.props.reduxStore.hero.map((hero) => (
          <li value={hero.id} key={hero.id}>
            {hero.name}
          </li>
        ))}
      </div>
    );
  }
}

const mapStateToProps = reduxStore => {
  return {
    reduxStore
  }
}
export default connect(mapStateToProps)(Select);;