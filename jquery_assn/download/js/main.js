(function(){

$(function() {
    $( '.dialog' ).dialog({
    	position: 'top'
    });
});

$('.circle').tooltip({
	track: true
	});

$('.square').tooltip({
	track: true
});

$('.triangle').tooltip({
	track: true
});

$('.heart').tooltip({
	track: true
})

$(function() {
    $( '.accordion' ).accordion({
    	collapsible: true,
    	active: false
    });
  });

}).call(this);

