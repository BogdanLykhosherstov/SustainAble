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
import {Link} from 'react-router-dom';


// import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';

import '../../styles/mystyles.css';

class MainPage extends Component {
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
    };

    this.newHouse = this.newHouse.bind(this);
  }


  componentDidMount() {
    fetch('/api/house')
      .then(res => res.json())
      .then(json => {
        this.setState({
          houses: json
        });
      });
  }
  componentDidUpdate(){
      console.log("Comm",this.state.community);
      console.log("Address",this.state.address);
      console.log("Above",this.state.above_grade);
      console.log("Below",this.state.below_grade);
      console.log("Garage",this.state.garage);


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
      for (var element in this.state.houses){
          console.log(this.state.houses[element]._id);

      }
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

      <div className="header-list"><div><h1>Calgary <span style={{color:'#f50057'}}>Houses</span></h1> <Fab className="fab-button" color="secondary" size="small" aria-label="Add" onClick={this.handleOpen.bind(this)}>
         <Icon>add</Icon>
         </Fab>
      </div>
        <div>
            <Link to="/map" style={{textDecoration:'none'}}><Button color='secondary'>Map</Button></Link>
            <Button color='secondary'>Analytics</Button>
        </div>
      </div>
      <Paper className={styles.root}>
      <Table className={styles.table}>
        <TableHead>
          <TableRow>
            <TableCell>Community</TableCell>
            <TableCell>Address</TableCell>
            <TableCell></TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.houses.map(row => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                {row.community}
              </TableCell>
              <TableCell >{row.address}</TableCell>
            <TableCell align="right"> <Link to={`/main/:id=${row._id}`}> <Button variant="outlined" color="secondary" className="more-button">More</Button></Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>

    <Modal
       aria-labelledby="simple-modal-title"
       aria-describedby="simple-modal-description"
       open={this.state.open}
       onClose={this.handleClose.bind(this)}
       >
         <Paper className="modal-container">
         <form noValidate autoComplete="off" className="modal-text-container">
            <h2>New House</h2>
             <TextField

               className="text-field-modal"
               id="outlined-name"
               label="Community"
               // className={classes.textField}
               // value={this.state.name}
               onChange={this.handleChange.bind(this,'community')}
               margin="normal"
             />
             <TextField

               id="outlined-name"
               className="text-field-modal"
               label="Address"
               // className={classes.textField}
               // value={this.state.name}
               onChange={this.handleChange.bind(this,'address')}
               margin="normal"
             />
             <TextField

               id="outlined-name"
               className="text-field-modal"
               label="Above-Grade"
               // className={classes.textField}
               // value={this.state.name}
               onChange={this.handleChange.bind(this,'above_grade')}
               margin="normal"
             />
             <TextField

               id="outlined-name"
               className="text-field-modal"
               label="Below-Grade"
               // className={classes.textField}
               // value={this.state.name}
               onChange={this.handleChange.bind(this,'below_grade')}
               margin="normal"
             />
             <TextField

               id="outlined-name"
               className="text-field-modal"
               label="Garage"
               // className={classes.textField}
               // value={this.state.name}
               onChange={this.handleChange.bind(this,'garage')}
               margin="normal"
             />
             <Button variant="contained" color="primary" className="modal-submit-button" onClick={this.submit.bind(this)}>Add</Button>
        </form>
         </Paper>
         </Modal>

      </div>
    );
  }
}

export default MainPage;
