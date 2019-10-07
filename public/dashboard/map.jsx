import React from 'react'
import 'https://unpkg.com/leaflet/dist/leaflet.css';
export default class Map extends React.Component{
    componentDidMount () {
        const leaflet = document.createElement("script");
        const map = document.createElement("script");
        const esri = document.createElement("script");
    
        leaflet.src = "https://unpkg.com/leaflet/dist/leaflet.js";
        leaflet.async = true;
    
        esri.src = "https://unpkg.com/leaflet/dist/leaflet.js";
        esri.async = true;
    
        map.src = "javascripts/map.js";
        map.async = true;
    
        document.body.appendChild(leaflet);
        document.body.appendChild(esri);
        document.body.appendChild(map);
    }
    render(){
        var mapsytle = {
            margin: 0, padding: 0,  
            width: '100%', 
            height: '100%'
        }
        return(
            <div id="map" style={mapsytle}>

            </div>
        )
    }    
}