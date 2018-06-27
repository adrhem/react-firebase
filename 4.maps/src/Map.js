import React, { Component } from 'react';

class Map extends Component {

  constructor(props){
    super(props);
    this.my_location_marker = null;
    this.selector = null;
    this.map = null;
    this.my_location_infowindow = null;
    this.zoom = 10;
    this.center = new window.google.maps.LatLng(20.6570536,-103.3271426);
  }
  render() {
    return (
      <div className="container mt-2">
        <div className="row">
          <div className="col-md-10 mx-auto text-center">
            <h1 className="text-center">Map</h1>
            <div className="row" id="map">
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount(){
    this.selector = document.getElementById('map');

    this.map = new window.google.maps.Map(this.selector, {
        zoom: this.zoom,
        center: this.center,
    });

    this.requestLocation();
  }

  requestLocation = () => {
    let location_promise = new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(function (position) {
        resolve({
          center: new window.google.maps.LatLng(position.coords.latitude, position.coords.longitude),
          zoom: 12,
        });
      }, function (error) {
        console.log(error);
        resolve(null);
      });
    });

    
    location_promise.then(result => {
      if(!result){
        return;
      }

      this.my_location_marker = new window.google.maps.Marker({
        map: this.map,
        title: 'My Location',
        position: result.center,
        draggable: true,
      });

      this.my_location_infowindow = new window.google.maps.InfoWindow({
        content:  `
          <div class="row">
            <div class="col-12">
              <h4 class="text-center">My location</h4>
            </div>
          </div>
        `,
      });

      this.my_location_marker.addListener('click',this.openInfoWindow);

      this.map.setZoom(result.zoom); 
      this.map.setCenter(result.center);
    });
      
  }

  openInfoWindow = () => {
  
    this.my_location_infowindow.open(this.map, this.my_location_marker);
  }


}

export default Map;
