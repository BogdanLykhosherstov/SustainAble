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
class Analytics extends Component {

    constructor(props) {
        super(props);
      }

    componentDidMount() {
        this.graphs();
    }

    graphs() {
        // draw all data below

        function drawBarChart() {
          var data = google.visualization.arrayToDataTable([
            ['Community', 'Kilowatt Hours / Year'],
            ['Arbour Lake', 5740],
            ['Harvest Hills', 6690],
            ['Crestmont', 8240],
            ['Coral Springs', 9420],
            ['Redstone', 10570],
            ['Southview', 16530]
          ]);


          var options = {
            chart: {
              title: 'Average Power Consumption by Community',
              subtitle: 'The aggregated energy consumption data for each community can be seen in the following graph. This shows the communities with the most efficient or inefficient heating solutions. It can be used to prioritize rollout for new energy saving initiatives or provide targeted recommendations to residents.',
            },
            bars: 'horizontal', // Required for Material Bar Charts.
            colors: ['#f50057', '#f50057', '#f50057', '#f50057'],
            titleTextStyle: {
                fontName: 'Arial',
                fontSize: 20, // 12, 18 whatever you want (don't specify px)
                bold: true,    // true or false
            }
        };

          var chart = new google.charts.Bar(document.getElementById('barchart_material'));

          chart.draw(data, google.charts.Bar.convertOptions(options));
        }



      function drawLineChart() {

        var data = new google.visualization.DataTable();
        data.addColumn('number', 'Ambient Temperature (°C)');
        data.addColumn('number', 'Power Consumption (GW)');

        data.addRows([
            [  -30,  18.5 ],
            [  -25,  16.5 ],
            [  -20,  14.5 ],
            [  -15,  12.5 ],
            [  -10,  10.5 ],
            [  -5,  8.5 ],
            [  0,  6.5 ],
            [  5,  4.5 ],
            [  10,  2.5 ],
            [  15,  0.5 ],
            [  20,  0 ],
            [  25,  0],
        ]);

        var options = {
          chart: {
            title: 'Total Power Consumption vs Outside Temperature',
            subtitle: 'The following graph shows the average power consumed by the entire city based on the ambient temperature observed in the communities. This data is extrapolated from the sensors present in each community and uses census data for the number of households. It can be used as a prediction service for energy providers who can proactively adjust their production based on weather forecasts.'
          },
          width: 900,
          height: 500,
          colors: ['#f50057'],
          titleTextStyle: {
            fontName: 'Arial',
            fontSize: 20, // 12, 18 whatever you want (don't specify px)
            bold: true,    // true or false
        }
        };

        var chart = new google.charts.Line(document.getElementById('linechart_material'));

        chart.draw(data, google.charts.Line.convertOptions(options));
      }

      // draw bar chart
      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawBarChart);

      // draw line chart
      google.charts.load('current', {'packages':['line']});
      google.charts.setOnLoadCallback(drawLineChart);

    }

    render() {

      return (
          <div className="container-list">

          <div className="header-list">
            <div><h1>Calgary <span style={{color:'#f50057'}}>Analytics</span></h1>
            </div>
            <div>
                <Link to="/main" style={{textDecoration:'none'}}><Button color='secondary'>Table</Button></Link>
                <Link to="/map" style={{textDecoration:'none'}}><Button color='secondary'>Map</Button></Link>
                <Link to="/analytics" style={{textDecoration:'none'}}><Button color='secondary'>Analytics</Button></Link>
            </div>
          </div>

            <div>
                <div id="barchart_material" style={{marginTop:'50px',width: '100%', height:'500px', marginBottom:'50px'}}></div>

                <div id="linechart_material" style={{width: '100%', height:'500px'}}></div>
            </div>
        </div>

      );
    }
}

export default Analytics;
