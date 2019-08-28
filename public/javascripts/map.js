var trafo_array = JSON.parse(dataTrafos);
var petugas_array = JSON.parse(dataPetugass);

var mymap = L.map('map').setView([-7.2575, 112.7521], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: 'pk.eyJ1IjoiZW5ub2JlbGwiLCJhIjoiY2p6bnhrcXJ1MDkwbTNkanNhOXJsZXNvciJ9.vNycT-oZNDQ1oV50J_YJ3w'
}).addTo(mymap);

var trafoIcon = L.icon({
	iconUrl: 'images/trafo_icon.png',

	iconSize:     [22, 22], // size of the icon
	iconAnchor:   [20, 20], // point of the icon which will correspond to marker's location
	popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var iconTeknisi = L.icon({
	iconUrl: 'images/teknisi_icon.png',

	iconSize:     [22, 22], // size of the icon
	iconAnchor:   [20, 20], // point of the icon which will correspond to marker's location
	popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

trafo_array.forEach(trafo => {
	var trafoMarker = L.marker([trafo.longitude, trafo.latitude], {icon : trafoIcon}).addTo(mymap); 
	trafoMarker.bindPopup(
		"id: " + trafo.id + 
		" status: " + trafo.status
	);

});

petugas_array.forEach(petugas => {
    L.marker([petugas.longitude, petugas.latitude], {icon : iconTeknisi}).addTo(mymap); 
});

// L.marker([-7.2575, 112.7521], {icon : trafoIcon}).addTo(mymap); //hardcode
L.marker([-7.2575, 112.7621], {icon : iconTeknisi}).addTo(mymap);//hardcode