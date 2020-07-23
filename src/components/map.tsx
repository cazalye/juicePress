import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '70%',
  };

class MarketMap extends Component<any, any> {
    
    render() {
        return (
            <div className="map-container">
                 <Map
                google={this.props.google}
                style={mapStyles}
                initialCenter={{ lat: -42.881197, lng: 147.325726}}
                // frameborder="0" style="border:0"
                // src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDwpi_byeV4RUb6GfLn90zMzDd42wUMfCI
                    // &q=Tasmania" allowfullscreen>
                 />
                 {/* <Marker
                     position={{ lat: -42.881197, lng: 147.325726}}
                /> */}
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDwpi_byeV4RUb6GfLn90zMzDd42wUMfCI'
}) (MarketMap);
