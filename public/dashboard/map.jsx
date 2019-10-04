import React from 'react'

export default class Map extends React.Component{
    render(){
        return(
            <div>
            <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css"/>
            <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
            <script src="https://unpkg.com/esri-leaflet/dist/esri-leaflet.js"></script>
            <div id="map">  </div>
          <script type="text/javascript">
          </script>
          <script src="javascripts/map.js"></script></div>
            )
    }    
}