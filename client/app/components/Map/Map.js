import React from 'react'


class Map extends React.Component{
    constructor(props){

        super(props)
        
        this.state = {
            houses: []

        };
     
        // this.newHouse = this.newHouse.bind(this);
    }

    componentDidMount(){
        fetch('/api/house')
        .then(res=> res.json())
        .then(json=>{
            this.setState({
                houses: json
            });
            console.log(json);
        });
       
    }

    componentDidUpdate(){
      
    }

test(){
    mapboxgl.accessToken = 'pk.eyJ1IjoicmlzaGFiaC1rdW1hcmlhIiwiYSI6ImNqczgwajVkbzBld3AzeXBhejNpN3B6b3EifQ._SD1c7Go3UfxUOgaYb4kYA';
    var map = new mapboxgl.Map({
    container: 'map',
    center:[-114.078270, 51.073425],
    style: 'mapbox://styles/mapbox/streets-v9', //hosted style id
    zoom:9
    
    });

    if( this.state.houses[0].f_type == "Heat Pumps"){
        this.state.houses[0].history.heat_lost="10%"
    }
  // create the popup
  var popup = new mapboxgl.Popup({ offset: 25 })
    .setHTML(`Address : ${this.state.houses[0].address}<br>
                Total Sq. Footage : ${parseInt(this.state.houses[0].sq_footage.above_grade.slice(0,-2))
                    +parseInt(this.state.houses[0].sq_footage.below_grade.slice(0,-2))
                    +parseInt(this.state.houses[0].sq_footage.garage.slice(0,-2))} sq. ft. <br> 
                Ext. Temp : ${this.state.houses[0].history.external_temp.slice(0,-1)} C<br>
                Int. Temp: ${this.state.houses[0].history.internal_temp.slice(0,-1)} C<br>
                Heat Loss: ${this.state.houses[0].history.heat_lost} ` );
   

  // create the popup
  var popup1 = new mapboxgl.Popup({ offset: 25 })
    .setHTML(`Address : ${this.state.houses[3].address}<br>
                Total Sq. Footage : ${parseInt(this.state.houses[3].sq_footage.above_grade.slice(0,-2))
                    +parseInt(this.state.houses[3].sq_footage.below_grade.slice(0,-2))
                    +parseInt(this.state.houses[3].sq_footage.garage.slice(0,-2))} sq. ft. <br> 
                Ext. Temp : ${this.state.houses[3].history.external_temp.slice(0,-1)} C<br>
                Int. Temp: ${this.state.houses[3].history.internal_temp.slice(0,-1)} C<br>
                Heat Loss: ${this.state.houses[3].history.heat_lost} ` );

  // create the popup
  var popup2 = new mapboxgl.Popup({ offset: 25 })
    .setHTML(`Address : ${this.state.houses[2].address}<br>
                Total Sq. Footage : ${parseInt(this.state.houses[3].sq_footage.above_grade.slice(0,-2))
                    +parseInt(this.state.houses[2].sq_footage.below_grade.slice(0,-2))
                    +parseInt(this.state.houses[2].sq_footage.garage.slice(0,-2))} sq. ft. <br> 
                Ext. Temp : ${this.state.houses[2].history.external_temp.slice(0,-1)} C<br>
                Int. Temp: ${this.state.houses[2].history.internal_temp.slice(0,-1)} C<br>
                Heat Loss: ${this.state.houses[2].history.heat_lost} ` );


    // create the popup
  var popup3 = new mapboxgl.Popup({ offset: 25 })
  .setHTML(`Address : ${this.state.houses[4].address}<br>
              Total Sq. Footage : ${parseInt(this.state.houses[4].sq_footage.above_grade.slice(0,-2))
                  +parseInt(this.state.houses[4].sq_footage.below_grade.slice(0,-2))
                  +parseInt(this.state.houses[4].sq_footage.garage.slice(0,-2))} sq. ft. <br> 
              Ext. Temp : ${this.state.houses[4].history.external_temp.slice(0,-1)} C<br>
              Int. Temp: ${this.state.houses[4].history.internal_temp.slice(0,-1)} C<br>
              Heat Loss: ${this.state.houses[4].history.heat_lost} ` );
 
   
   
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
render(){
   
    return(
        <div id="map" style={{width: '800px', height:'350px'}}>
        <button onClick={this.test.bind(this)}>Click me</button>
        </div>
    )
}
}

export default Map;
