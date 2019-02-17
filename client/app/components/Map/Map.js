import React from 'react'
import Script from "react-inline-script"

class Map extends React.Component{
    constructor(props){
        super(props)
    }

test(){
    mapboxgl.accessToken = 'pk.eyJ1IjoicmlzaGFiaC1rdW1hcmlhIiwiYSI6ImNqczgwajVkbzBld3AzeXBhejNpN3B6b3EifQ._SD1c7Go3UfxUOgaYb4kYA';
    var map = new mapboxgl.Map({
    container: 'map',
    center:[-114.078270, 51.073425],
    style: 'mapbox://styles/mapbox/dark-v9', //hosted style id
    zoom:9
    
    });
    
  // create the popup
  var popup = new mapboxgl.Popup({ offset: 25 })
  .setHTML('Address : Somewhere in Saddletowne<br> Sq. Footage : 1900 sq. ft. <br> Ext. Temp : 10 C<br>Int. Temp: 19 C<br>Heat Loss: 10%<br>Furnace Type - Type  ');
   
  // create the marker
  new mapboxgl.Marker()
  .setLngLat([-113.947695,51.123812])
  .setPopup(popup) // sets a popup on this marker
  .addTo(map);
}
render(){
   
    return(
        <div id="map" style={{width: '800px', height:'350px'}}>
        <button onClick={this.test.bind(this)}>Click me</button>
        </div>
    )
}
}

export default Map;
