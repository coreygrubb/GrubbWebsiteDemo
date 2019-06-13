"use strict";

// The latitude and longitude of your business / place
var position = [41.4993, -81.6944];

function showGoogleMaps() {

	var latLng = new google.maps.LatLng(position[0], position[1]);

	var mapOptions = {
		zoom: 16, // initialize zoom level - the max value is 21
		streetViewControl: false, // hide the yellow Street View pegman
		scaleControl: true, // allow users to zoom the Google Map
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		center: latLng
	};

	var map = new google.maps.Map(document.getElementById('googlemaps'), mapOptions);

	// Show the default red marker at the location
	var marker = new google.maps.Marker({
		position: latLng,
		map: map,
		draggable: false,
		animation: google.maps.Animation.DROP
	});
}

google.maps.event.addDomListener(window, 'load', showGoogleMaps);


//function play(clip) {
//	var video = document.getElementsByTagName('iframe')[0];
//	video.src = 'https://www.youtube.com/embed/' + clip + '?autoplay=1';
//	return false;
//}


//// Initialize and add the map
//function initMap() {
//	// The location of Uluru
//	var uluru = { lat: 41.4993, lng: -81.6944 };
//	// The map, centered at Uluru
//	var map = new google.maps.Map(
//		document.getElementById('map'), { zoom: 14, center: uluru });
//	// The marker, positioned at Uluru
//	var marker = new google.maps.Marker({ position: uluru, map: map });
//}
