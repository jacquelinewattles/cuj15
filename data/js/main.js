(function(){

	/*

	url,name,line
	http://www.mta.info/nyct/service/,Smith St & Bergen St At Ne Corner (To Manhattan And Queens Only),F-G
	http://www.mta.info/nyct/service/,Court St & Montague St At Sw Corner,2-3-4-5-N-R
	http://www.mta.info/nyct/service/,Court St & Montague St At Sw Corner,2-3-4-5-N-R

	*/

	// An alternative to usind d3 would be to convert our csv to json and use jQuery's $.getJSON function.
	d3.csv('data/subwaystation.csv', function(error, subwayStations){
		// console.log(error, subwayData);
		subwayStations.forEach(function(subwayStation){
			var delimiter = '(';
			var subway_station_name_parts = subwayStation.name.split(delimiter);
			var subway_direction = subway_station_name_parts[1];

			if (subway_direction){
				subway_direction = subway_direction.replace(/\)/g, '');
				subwayStation.direction = subway_direction;
			}

			//replace the name with the name minus the direction
			subwayStation.name = subway_station_name_parts[0].trim();

			//Make a new column that is our line column but as an array of lines
			subwayStation.lineList = subwayStation.line.split('-');
		});

		// $('#canvas').append('<div>'+ subwayStations[1].name +
		// ', '+ subwayStations[1].direction + ' ' + subwayStations[1].lineList.join(' - ') + '</div>');


		var filtered_entrances = subwayStations.filter(function(subwayStation){
			return _.contains(subwayStation.lineList, '2') || _.contains(subwayStation.lineList, '3') || _.contains(subwayStation.lineList, 'A') || _.contains(subwayStation.lineList, 'C');

		});

		filtered_entrances.forEach(function(subwayStation){
			$('#canvas').append('<div>'+ subwayStation.name + ' ,' + subwayStation.direction + ' ' + subwayStation.lineList.join(' - ') + '</div>')

		});


		// HOMEWORK: MAKE SOME BUTTONS: all entrances on A or B line or which direction they're going
			// ASSN2: Underscore: give short presentation on your underscore verb and say what is a good application and you have to use it and put it in the presentation
		// MINE IS PLUCK! The world's funnest underscore verb

		console.log(filtered_entrances.length);
		

	})

}).call(this);