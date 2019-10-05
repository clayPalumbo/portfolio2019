import React, { Component } from "react";
import { compose, withProps, withHandlers } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow
} from "react-google-maps";


const apiKey = 'AIzaSyBdncZvkNUpZiLS-07md2po65CCB9SzrH4'

const MyMapComponent = compose(
    withProps({
        googleMapURL:
            `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`,
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%`}} />
    }),
    withScriptjs,
    withGoogleMap
)(props => (
    <GoogleMap
        defaultZoom={4}
        defaultCenter={{ lat: 39.5, lng: -98.5 }}>
        <Marker position={{ lat: 35.2271, lng: -80.8431 }}>
        {/* <InfoWindow
                                    onCloseClick={() => this.showInfo(null)}>
                                    <div className="container-fluid">
                                    <div className="row">
                                        <h3>Charlotte, NC</h3>
                                        <p>Hi</p>
                                        </div>
                                    </div>
                                </InfoWindow> */}
        </Marker>
    </GoogleMap>
));


export default class GoogleMapComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showInfoIndex: null
        }
    }

    showInfo = (i) => {
        console.log(i);
        this.setState({ showInfoIndex: i })
    }

    render() {
        return (
            <div>
                <MyMapComponent
                    isMarkerShown
                    markers={this.state.markers}
                />
            </div>
        )
    }
}