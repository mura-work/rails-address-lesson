var map;
var marker;
var infoWindow
var center = {
	lat: 34.7019399,
	lng: 135,51002519999997
}
function initMap() {
	map = new google.maps.Map(document.getElementById('sample'), {
		center: center,
		zoom: 19
	});

	marker = new.google.maps.Marker({
		position: center,
		map: map
	});

	infoWindow = new.google.maps.infoWindow({
		content: '<div class="sample">TAM 大阪</div>'
	});

	marker.addListener('click', function() {
		infoWindow.open(map, marker);
	});
}