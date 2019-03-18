import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';

//mui imports
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//card styles
const styles = {
  card: {
    width: 175,
    display: 'inline-block',
    margin: '0 2px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

class Select extends Component {
  
  render() {
    const { classes } = this.props;

    return (
      <center>
      <div id="heroCards">
        {this.props.reduxStore.hero.map((hero) => (
          <Card className={classes.card} value={hero.id} key={hero.id}>
          <CardContent>
           <Typography>{hero.name}</Typography>
          </CardContent>
          </Card>
        ))}
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
export default (connect(mapStateToProps)(withStyles(styles)(Select)));;