import React from 'react'
import 'https://unpkg.com/leaflet/dist/leaflet.css';
export default class Map extends React.Component{
    componentDidMount () {
        const leaflet = document.createElement("script");
        const map = document.createElement("script");
        const esri = document.createElement("script");
    
        leaflet.src = "https://unpkg.com/leaflet/dist/leaflet.js";
        leaflet.async = false;
    
        esri.src = "https://unpkg.com/leaflet/dist/leaflet.js";
        esri.async = false;
    
        map.src = "javascripts/map.js";
        map.async = true;
    
        document.body.appendChild(leaflet);
        document.body.appendChild(esri);
        document.body.appendChild(map);
    }
    render(){
        var mapsytle = { 
           position: 'absolute',
           top: 0,
           bottom: 0
        }
        return(
            <div id="map" class="col-xs-12 col-sm-9  margin-zero map-padding" style={{height : '100%'}}>

            </div>
        )
    }    
}
