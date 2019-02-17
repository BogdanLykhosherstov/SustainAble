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

class Map extends Component {
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
       this.test();

  }


  test(){
    mapboxgl.accessToken = 'pk.eyJ1IjoicmlzaGFiaC1rdW1hcmlhIiwiYSI6ImNqczgwajVkbzBld3AzeXBhejNpN3B6b3EifQ._SD1c7Go3UfxUOgaYb4kYA';
    var map = new mapboxgl.Map({
    container: 'map',
    center:[-114.078270, 51.073425],
    style: 'mapbox://styles/mapbox/streets-v9', //hosted style id
    zoom:9

    });


  // create the popup
  var popup = new mapboxgl.Popup({ offset: 25 })
    .setHTML(`Address : ${this.state.houses[0].address}<br>
                Total Sq. Footage : ${parseInt(this.state.houses[0].sq_footage.above_grade.slice(0,-2))
                    +parseInt(this.state.houses[0].sq_footage.below_grade.slice(0,-2))
                    +parseInt(this.state.houses[0].sq_footage.garage.slice(0,-2))} sq. ft. <br>
                Ext. Temp : ${this.state.houses[0].history.external_temp.slice(0,-1)} C<br>
                Int. Temp: ${this.state.houses[0].history.internal_temp.slice(0,-1)} C<br>
                Runtime Percentage: ${this.state.houses[0].history.runtime_percentage} ` );


  // create the popup
  var popup1 = new mapboxgl.Popup({ offset: 25 })
    .setHTML(`Address : ${this.state.houses[1].address}<br>
                Total Sq. Footage : ${parseInt(this.state.houses[1].sq_footage.above_grade.slice(0,-2))
                    +parseInt(this.state.houses[1].sq_footage.below_grade.slice(0,-2))
                    +parseInt(this.state.houses[1].sq_footage.garage.slice(0,-2))} sq. ft. <br>
                Ext. Temp : ${this.state.houses[1].history.external_temp.slice(0,-1)} C<br>
                Int. Temp: ${this.state.houses[1].history.internal_temp.slice(0,-1)} C<br>
                Runtime Percentage: ${this.state.houses[1].history.runtime_percentage} ` );

  // create the popup
  var popup2 = new mapboxgl.Popup({ offset: 25 })
    .setHTML(`Address : ${this.state.houses[2].address}<br>
                Total Sq. Footage : ${parseInt(this.state.houses[2].sq_footage.above_grade.slice(0,-2))
                    +parseInt(this.state.houses[2].sq_footage.below_grade.slice(0,-2))
                    +parseInt(this.state.houses[2].sq_footage.garage.slice(0,-2))} sq. ft. <br>
                Ext. Temp : ${this.state.houses[2].history.external_temp.slice(0,-1)} C<br>
                Int. Temp: ${this.state.houses[2].history.internal_temp.slice(0,-1)} C<br>
                Runtime Percentage: ${this.state.houses[2].history.runtime_percentage} ` );


    // create the popup
      var popup3 = new mapboxgl.Popup({ offset: 25 })
      .setHTML(`Address : ${this.state.houses[3].address}<br>
                  Total Sq. Footage : ${parseInt(this.state.houses[3].sq_footage.above_grade.slice(0,-2))
                      +parseInt(this.state.houses[3].sq_footage.below_grade.slice(0,-2))
                      +parseInt(this.state.houses[3].sq_footage.garage.slice(0,-2))} sq. ft. <br>
                  Ext. Temp : ${this.state.houses[3].history.external_temp.slice(0,-1)} C<br>
                  Int. Temp: ${this.state.houses[3].history.internal_temp.slice(0,-1)} C<br>
                  Runtime Percentage: ${this.state.houses[3].history.runtime_percentage} ` );



      // create the marker
      new mapboxgl.Marker()
      .setLngLat([-114.131218,51.077889])
      .setPopup(popup) // sets a popup on this marker
      .addTo(map);

      // create the marker
      new mapboxgl.Marker()
      .setLngLat([-114.141265,51.097946])
      .setPopup(popup1) // sets a popup on this marker
      .addTo(map);

       // create the marker
      new mapboxgl.Marker()
      .setLngLat([ -113.979272,51.013607])
      .setPopup(popup2) // sets a popup on this marker
      .addTo(map);

      // create the marker
      new mapboxgl.Marker()
      .setLngLat([ -113.939178,51.126503])
      .setPopup(popup3) // sets a popup on this marker
      .addTo(map);



  }

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
      <div className="container-list">

      <div className="header-list"><div><h1>Calgary <span style={{color:'#f50057'}}>Map</span></h1>
      </div>
        <div>
            <Link to="/main" style={{textDecoration:'none'}}><Button color='secondary'>Table</Button></Link>
            <Link to="/analytics" style={{textDecoration:'none'}}><Button color='secondary'>Analytics</Button></Link>

        </div>
      </div>
      <Paper className={styles.root}>
      <div id="map" style={{width: '100%', height:'500px'}}>
      </div>
    </Paper>

      </div>
    );
  }
}

export default Map;
