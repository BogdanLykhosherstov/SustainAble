import React, { Component } from 'react';
import 'whatwg-fetch';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';


// import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';

import '../../styles/mystyles.css';

class More extends Component {
  constructor(props) {
    super(props);

    this.state = {
      houses: [],
      open:false,
      community:"",
      address:"",
      above_grade:"",
      below_grade:"",
      garage:"",
      id:""
    };

    this.newHouse = this.newHouse.bind(this);
  }


  componentDidMount() {
      const queryString = require('query-string');
      const qstring = this.props.location.pathname;
      let queryParams = queryString.parse(qstring);

      for (const key of Object.keys(queryParams)) {
            this.setState({id:queryParams[key]})
        }
    fetch('/api/house')
      .then(res => res.json())
      .then(json => {
        this.setState({
          houses: json
        });
      });


  }
  componentDidUpdate(){
      // console.log("Comm",this.state.community);
      // console.log("Address",this.state.address);
      // console.log("Above",this.state.above_grade);
      // console.log("Below",this.state.below_grade);
      // console.log("VALUE",this.state.id);




  }
  handleChange (name,event) {

      this.setState({
        [name]: event.target.value,
      });

    };
  handleOpen(){
   this.setState({ open: true });
 };

 handleClose(){
   this.setState({ open: false });
 };
 submit(){
     this.newHouse();
     this.handleClose();


 }

  newHouse() {
    const data = {
        community:this.state.community,
        address:this.state.address,
        above_grade:this.state.above_grade,
        below_grade:this.state.below_grade,
        garage:this.state.garage,
        external_temp:"N/A",
        internal_temp:"N/A",
        runtime_percentage:"N/A"
    }
    fetch(`/api/house-create`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        body:JSON.stringify(data),
      })
      .then(res => res.json())
      .then(json => {
        let data = this.state.houses;
        data.push(json);
        console.log("House Returned!",json);
        this.setState({
          houses: data
        });
      });
  };
  render() {
      var localState={};
      if(this.state.houses.length>0){
          for(var element in this.state.houses){
              // console.log("VALUE",element);
              if (this.state.houses[element]._id == this.state.id){
                  console.log("Element ID", element);
                  console.log("State id: ", this.state.id);
                  console.log("House: ", this.state.houses[element]);
                  localState = {
                      community:this.state.houses[element].community,
                      address:this.state.houses[element].address,
                      internal_temp:this.state.houses[element].history.internal_temp,
                      external_temp:this.state.houses[element].history.external_temp,
                      runtime_percentage:this.state.houses[element].history.runtime_percentage

                  };

              }
          }
      }
      // console.log(queryParams);
      const styles = theme => ({
      root: {
        width: '90%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',

      },
      table: {
        minWidth: 700,
      },
    });
    var id=0;


     // Code Goes HEre:
    return (
      <div className="container-list">

      <div className="header-list"><div><h1>Calgary <span style={{color:'#f50057'}}>More Info</span></h1>
      </div>
        <div>
            <Link to="/main" style={{textDecoration:'none'}}><Button color='secondary'>Table</Button></Link>
            <Link to="/map" style={{textDecoration:'none'}}><Button color='secondary'>Map</Button></Link>
            <Button color='secondary'>Analytics</Button>
        </div>
      </div>
      <Paper className={styles.root}>
        <div className="more-container">
            <h2 style={{marginLeft:'10px'}}>Community:</h2><h2><span style={{color:'#f50057',marginLeft:'10px'}}> {localState.community} </span></h2>

        </div>
      </Paper>
      <Paper className={styles.root}>
        <div className="more-container">
            <h2 style={{marginLeft:'10px'}}>Address:</h2><h2><span style={{color:'#f50057',marginLeft:'10px'}}> {localState.address} </span></h2>

        </div>
      </Paper>
          <Paper className={styles.root}>
            <div className="more-container">
                <h2 style={{marginLeft:'10px'}}>Internal Temperature:</h2><h2><span style={{color:'#f50057',marginLeft:'10px'}}> {localState.internal_temp} </span></h2>

            </div>
          </Paper>
          <Paper className={styles.root}>
            <div className="more-container">
                <h2 style={{marginLeft:'10px'}}>External Temperature:</h2><h2><span style={{color:'#f50057',marginLeft:'10px'}}> {localState.external_temp} </span></h2>

            </div>
          </Paper>
          <Paper className={styles.root}>
            <div className="more-container">
                <h2 style={{marginLeft:'10px'}}>Runtime Percentage:</h2><h2><span style={{color:'#f50057',marginLeft:'10px'}}> {localState.runtime_percentage} </span></h2>

            </div>
          </Paper>



      </div>
    );
  }
}

export default More;
