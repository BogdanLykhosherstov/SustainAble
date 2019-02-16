import React, { Component } from 'react';
import 'whatwg-fetch';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import '../../styles/mystyles.css';

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      houses: []
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
  newHouse() {
    fetch('/api/house-create-test', { method: 'POST' })
      .then(res => res.json())
      .then(json => {
        // let data = this.state.counters;
        // data.push(json);
        console.log("House Returned!",json);
        this.setState({
          houses: data
        });
      });
  };
  render() {
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
     // Code Goes HEre:
    return (
      <div className="container">
      <h1>Calgary</h1>
      <Paper className={styles.root}>
      <Table className={styles.table}>
        <TableHead>
          <TableRow>
            <TableCell>Community</TableCell>
            <TableCell align="right">Address</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.houses.map(row => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                {row.community}
              </TableCell>
              <TableCell align="right">{row.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>

        // <button onClick={this.newHouse}>New House Test</button>
      </div>
    );
  }
}

export default MainPage;
