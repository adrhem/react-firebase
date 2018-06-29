import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import firebase from './globals/firebase.js';
import InfoWindow from './InfoWindow';
import marker_icon from './assets/images/marker.png';

class Map extends Component {

  constructor(props){
    super(props);
    this.my_location_marker = null;
    this.selector = null;
    this.map = null;
    this.my_location_infowindow = null;
    this.zoom = 10;
    this.center = new window.google.maps.LatLng(20.6570536,-103.3271426);
    this.state = {
      markers: [],
    }
    this.database = firebase.firestore();
    const settings = {timestampsInSnapshots: true};
    this.database.settings(settings);
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
    this.loadMarkers();
    this.requestLocation();
  }

  loadMarkers = () => {
    let docEnabled = this.database.collection('campuses').where('enabled',"==",true);
    docEnabled.onSnapshot(docSnapshot => {
      docSnapshot.forEach((doc) => {
        let campus = {
          id: doc.id,
          data: doc.data(),
        };
        this.addCampusMarker(campus);
      })
    }, err => {
      console.log(`Encountered error: ${err}`);
    });


    let docDisabled = this.database.collection('campuses').where('enabled',"==",false);
    docDisabled.onSnapshot(docSnapshot => {
      docSnapshot.forEach((doc) => {
        this.removeCampusMarker(doc.id);
      })
    }, err => {
      console.log(`Encountered error: ${err}`);
    });
  }

  addCampusMarker = (campus) => {

    const markers = this.state.markers;
    let coords = new window.google.maps.LatLng(
      campus.data.location.latitude,
      campus.data.location.longitude
    );
    let marker = new window.google.maps.Marker({
      map: this.map,
      id: campus.id,
      title: campus.data.name,
      position: coords,
      icon: marker_icon
    });

    let html = <InfoWindow deleteMarker={this.deleteMarker} data={campus.data} id={campus.id} />

    let marker_infowindow = new window.google.maps.InfoWindow({
      content: ReactDOMServer.renderToString(html),
    });

    marker.addListener('click',() => {
      marker_infowindow.open(this.map, marker);
    });

    markers.push(marker);

    this.setState({
      markers: markers
    });
  }

  removeCampusMarker = (id) => {

    const markers = this.state.markers;
    
    for(let i in markers){
      let marker = markers[i];
      let marker_id = marker.id || '';
      if(marker_id === id){
        marker.setMap(null);
        markers.splice(i, 1);
        break;
      }
    }

    this.setState({
      markers: markers
    });
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
