(function(){

	var map = L.map('map').setView([39.2500,-97.743061], 4);

	L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-i875mjb7/{z}/{x}/{y}.png', {
	    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	    maxZoom: 18
	}).addTo(map);
	

	var locations = {
	
	'austin':{	
		name:'Austin',
		lat:30.2500,
		lng:-97.743061,
		},

	'nyc':{	
		name:'New York City',
		lat:40.8075,
		lng:-73.9619,
		},

	'la':{	
		name:'Los Angeles',
		lat:34.052234,
		lng:-118.243685,
		},

	'chi':{
		name:'Chicago',
		lat:41.878114,
		lng:-87.629798,
		}

	};

	var mapMark = [{lat: 30.2500, lng: -97.743061}, {lat:40.8075, lng:-73.9619}, {lat:34.052234, lng:-118.243685}, {lat: 41.878114, lng: -87.629798}]

	var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];

	for (i = 0; i <= 3; i++) { 
	var latlng = L.latLng(mapMark[i].lat, mapMark[i].lng);
	marker = new L.marker(latlng)
    		.addTo(map);
	}

	$('.option').on('click', function(){
		var id = $(this).attr('data-which');
		var latlng = L.latLng(locations[id].lat, locations[id].lng);
		map.setView(latlng, 11);
	});



L.marker([50.5, 30.5]).addTo(map);


	$('#findMe').on('click',function(e){
		map.locate({setView:true, maxZoom: 15});
		$('.load').addClass('appear');
		$('.image').addClass('disappear');
		map.on('locationfound',function(){
			$('.load').removeClass('appear');
			$('.image').removeClass('disappear');
		L.marker(e.latlng);
		});
	});

}).call(this);