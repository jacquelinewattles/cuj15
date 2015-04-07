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

		var oLineStops = subwayStations.filter(function(subwayStation){
			return _.contains(subwayStation.lineList, '1'); 
		});

		var twLineStops = subwayStations.filter(function(subwayStation){
			return _.contains(subwayStation.lineList, '2'); 
		});

		var thLineStops = subwayStations.filter(function(subwayStation){
			return _.contains(subwayStation.lineList, '3'); 
		});



		function showA() { 
			aLineStops.forEach(function(subwayStation){
				$('#canvas').append(
					'<div class="resultsList">' + subwayStation.name + ', ' + subwayStation.direction + ' ' + subwayStation.lineList.join(' - ') + '</div>')

			});
		}

		function showC() {
			cLineStops.forEach(function(subwayStation){
				$('#canvas').append(
					'<div class="resultsList">' + subwayStation.name + ', ' + subwayStation.direction + ' ' + subwayStation.lineList.join(' - ') + '</div>')
			});
		}

		function showO() {
			oLineStops.forEach(function(subwayStation){
				$('#canvas').append(
					'<div class="resultsList">' + subwayStation.name + ', ' + subwayStation.direction + ' ' + subwayStation.lineList.join(' - ') + '</div>')
			});
		}

		function showTw() {
			twLineStops.forEach(function(subwayStation){
				$('#canvas').append(
					'<div class="resultsList">' + subwayStation.name + ', ' + subwayStation.direction + ' ' + subwayStation.lineList.join(' - ') + '</div>')
			});
		}

		function showTh() {
			thLineStops.forEach(function(subwayStation){
				$('#canvas').append(
					'<div class="resultsList">' + subwayStation.name + ', ' + subwayStation.direction + ' ' + subwayStation.lineList.join(' - ') + '</div>')
			});
		}

		$('#aLine').click(function(){
			$('.dirInfo').html('Get off at 125th St. and walk southwest.')
			$('#canvas').empty();
			showA();
		});

		$('#cLine').click(function(){
			$('.dirInfo').html('Get off at 110th St. Cathedral Parkway and walk by morningside park.')
			$('#canvas').empty();
			showC();
		});

		$('#oLine').click(function(){
			$('.dirInfo').html('Get off at 116th St., and you\'ve already arrived!')
			$('#canvas').empty();
			showO();
		});

		$('#twLine').click(function(){
			$('.dirInfo').html('Get off at 96th or 125th and switch to a local 1 train, then get off at 116.')
			$('#canvas').empty();
			showTw();
		});

		$('#thLine').click(function(){
			$('.dirInfo').html('Switch to a local train at 96th or 125th, then get off at 116th.')
			$('#canvas').empty();
			showTh();
		});

		

	})

}).call(this);