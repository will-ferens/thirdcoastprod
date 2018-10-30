import React, { Component } from 'react'
import { GoogleApiWrapper, InfoWindow, Map, Marker} from 'google-maps-react'
import '../styles/map.css'

const API= 'AIzaSyDAkBYiCuJSNwmkb-vWWtcmupz6swYTIaM'

class MapContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        }

        this.onMapClick = this.onMapClick.bind(this)
        this.onMarkerClick = this.onMarkerClick.bind(this)
    }
    onMapClick = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    }
    onMarkerClick = (props, marker, event) => {
        this.setState({
            activeMarker: marker,
            selectedPlace: props,
            showInfoWindow: true
        })
    }
    render() {
        const style = {
            width: '300px',
            height: '300px',
        }
        return (

                <Map
                    className={'map'}
                    zoom={ 14 }
                    style={ style }
                    google= { this.props.google }
                    onClick={ this.onMapClick }
                    initialCenter={{ lat: 43.954738, lng: -86.258963 }}
                >
                    <Marker 
                        onClick={ this.onMarkerClick }
                        title={ 'Third Coast Family Practice' }
                        position={{ lat: 43.954738, lng: -86.258963 }}
                        name={ 'Third Coast Family Practice'}
                    />
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showInfoWindow}

                    >
                        <div>
                            <h4>Third Coast Family Practice</h4>
                            <p>821 US-10</p>
                            <p>Scottville, MI</p>
                            <p>49454</p>
                        </div>
                    </InfoWindow>
                </Map>

        )
    }
}

export default GoogleApiWrapper({
    apiKey: (API)
})(MapContainer)
