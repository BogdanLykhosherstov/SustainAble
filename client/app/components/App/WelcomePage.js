import React, { Component } from 'react';
import 'whatwg-fetch';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import Modal from '@material-ui/core/Modal';

// import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';

import '../../styles/mystyles.css';

class WelcomePage extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    // Code Goes HEre:
    return (
      <div className="centered">
        <p className="title">Sustain-Able</p>
        <p className="subtitle">Aggregated City information for a greener future</p>

         <Link to="/list" style={{ textDecoration: 'none' }}>
           <Button variant="outlined" color="inherit" className="button-main" size="large">Get Started</Button>
         </Link>

      </div>
    );
  }
}

export default WelcomePage;
