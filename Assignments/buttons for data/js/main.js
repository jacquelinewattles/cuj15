(function(){

	/*

	url,name,line
	http://www.mta.info/nyct/service/,Smith St & Bergen St At Ne Corner (To Manhattan And Queens Only),F-G
	http://www.mta.info/nyct/service/,Court St & Montague St At Sw Corner,2-3-4-5-N-R
	http://www.mta.info/nyct/service/,Court St & Montague St At Sw Corner,2-3-4-5-N-R

	*/


	d3.csv('data/subwaystation.csv', function(error, subwayStations){
		subwayStations.forEach(function(subwayStation){
			var delimiter = '(';
			var subway_station_name_parts = subwayStation.name.split(delimiter);
			var subway_direction = subway_station_name_parts[1];

			if (subway_direction){
				subway_direction = subway_direction.replace(/\)/g, '');
				subwayStation.direction = subway_direction;
			}

			subwayStation.name = subway_station_name_parts[0].trim();

			subwayStation.lineList = subwayStation.line.split('-');
		});


		var aLineStops = subwayStations.filter(function(subwayStation){
			return _.contains(subwayStation.lineList, 'A'); 
		});

		var cLineStops = subwayStations.filter(function(subwayStation){
			return _.contains(subwayStation.lineList, 'C'); 
		});

		aLineStops.forEach(function(subwayStation){
			$('#aLine').click(function(){
				$('#canvas').append(
					'<div>' + subwayStation.name + ' ,' + subwayStation.direction + ' ' + subwayStation.lineList.join(' - ') + '</div>')

			});

		});


		// HOMEWORK: MAKE SOME BUTTONS: all entrances on A or B line or which direction they're going
			// ASSN2: Underscore: give short presentation on your underscore verb and say what is a good application and you have to use it and put it in the presentation
		// MINE IS PLUCK! The world's funnest underscore verb

		console.log(filtered_entrances.length);
		

	})

}).call(this);