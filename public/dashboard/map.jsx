import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

export default class Map extends React.Component{
    render(){
        const position = [51.505, -0.09]
        return(
            <Map center={position} zoom={13}>
                <script src="https://unpkg.com/react-leaflet/dist/react-leaflet.min.js"></script>
                <script src="https://unpkg.com/react-leaflet/dist/react-leaflet.js"></script>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
                />
                <Marker position={position}>
                    <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
                </Marker>
            </Map>
        )
    }    
}