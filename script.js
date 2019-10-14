// var map;
// var marker;
// var infoWindow;
// var center = {
// 	lat: 34.7019399,
// 	lng: 135.51002519999997
// };
// function initMap() {
// 	map = new google.maps.Map(document.getElementById('sample'), {
// 		center: center,
// 		zoom: 19
// 	});

// 	marker = new google.maps.Marker({
// 		position: center,
// 		map: map
// 	});

// 	infoWindow = new google.maps.infoWindow({
// 		content: '<div class="sample">TAM 大阪</div>'
// 	});

// 	marker.addListener('click', function() {
// 		infoWindow.open(map, marker);
// 	});
// }


var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('sample'), { // #sampleに地図を埋め込む
        center: { // 地図の中心を指定
            lat: 34.7019399, // 緯度
            lng: 135.51002519999997 // 経度
        },
        zoom: 19 // 地図のズームを指定
    });
}