import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

import { Events } from '../api/events';

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      events: []
    };

    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: !this.state.showingInfoWindow
    });
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

  componentDidMount() {
    this.eventsTracker = Tracker.autorun(() => {
      Meteor.subscribe('events');
      const events = Events.find({}).fetch();
      this.setState({ events });
      console.log('Events', events);
    });
  }

  renderInfoWindow() {
    // return this.state.events.map((event) => {
    return (
      <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
        onClose={this.onMapClicked}
      >
        <div>
          <h1>{this.state.selectedPlace.name}</h1>
        </div>
      </InfoWindow>
    );
    // });
  }

  render() {
    return (
      <Map
        google={this.props.google}
        onClick={this.onMapClicked}
        initialCenter={{
          lat: 30.2672,
          lng: -97.7431
        }}
        containerStyle={{ display: 'flex', height: 'calc(100vh - 6rem)', width: '80%' }}
        style={{ justifyContent: 'space-between', width: '100%', position: 'absolute' }}
        zoom={12}
      >
        {this.state.events.map(event => {
          console.log('here');
          <Marker onClick={this.onMarkerClick} name={event.event} position={event.latlng} />;
        })}
        {this.renderInfoWindow()}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBQ0s-ncMdah77S3Qx1DyevYyDH9CxsZuY'
})(MapContainer);
