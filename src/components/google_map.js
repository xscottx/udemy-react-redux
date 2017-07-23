import React, { Component } from 'react';

class GoogleMap extends Component {
  // lifecycle react method that gets called after rendered
  componentDidMount() {
    // how u make 3P libraries work w/ react
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    return <div ref="map" />; // returns ref prop that is part of react (this.refs.map)
  }
}

export default GoogleMap;
