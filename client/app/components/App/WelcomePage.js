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
import mainLogo from './Logo.png';
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
       <img src={mainLogo} className="welcome-image"/>
       <p className="subtitle">Energy Efficient Solutions for a Greener Future</p>

        <Link to="/main" style={{ textDecoration: 'none' }}>
          <Button variant="outlined" color="secondary" className="button-main" size="large">Get Started</Button>
        </Link>

     </div>
   );
 }
}

export default WelcomePage;
