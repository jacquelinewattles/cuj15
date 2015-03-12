(function(){

$('.slide1').hide(x);
$('.slide2').hide(x);
$('.slide3').hide(x);
$('.slide4').hide(x);
$('.backButton').hide(x);
$('.newButton').hide(x);
$('#timeline').hide(x);
$('#timeline2').hide(x);
$('#timeline3').hide(x);
$('#restart').hide(x);

var counter = 0;
var x = 1000;

function moveToNext() {
	counter += 1;
}

function moveBack() {
	counter -= 1;
}

// function beginTimelines() {
// 	$('.slide4').hide(x);
// 	$('.textbox').hide(x);
// 	$('.timeline').show(x);
// 	console.log('success');
// }

$.timeliner({timelineContainer: '#timeline'});
$.timeliner({timelineContainer: '#timeline2'});
$.timeliner({timelineContainer: '#timeline3'});

//button image glow
$('.button img')
	.mouseover(function() {
		$(this).attr('src','img/button_glow.png')
	})
	.mouseout(function() {
		$(this).attr('src','img/button1.png')
}); 

$('.backButton').on( 'click', function(){

	moveBack();

    console.log(counter);
})


$('.button img').on( 'click', function(){
    moveToNext();
    // slide 1: hide previous slide
    // rotate foward button
    // show slide1
    if (counter == 1){
    	$('.n').hide(400);
    	$('.slide2').hide(x);
    	$('.button').attr('id', 'rotatedImage');
    	$('.slide1').show(x);
    	$('.backButton').show();
    } else if (counter == 2){
  		$('.slide1').hide(x);
  		$('.slide3').hide(x);
    	$('.slide2').show(x);
    } else if (counter == 3){
    	$('.slide4').hide(x);
    	$('.slide2').hide(x);
    	$('.slide3').show(x);
    } else if (counter == 4){
    	$('.slide3').hide(x);
    	$('.slide5a').hide(x);
    	$('.button').hide(x);
    	$('.backButton').hide(x);
    	$('.textbox').hide(x);
    	$('.slide4').show(x);
    	$('#restart').show(x);
    } 

    console.log(counter);

})

 $('.backButton img')
	.mouseover(function() {
		$(this).attr('src','img/button_glow.png')
	})
	.mouseout(function() {
		$(this).attr('src','img/button1.png')
}); 

// promoter image glow
$('.promoter img')
	.mouseover(function() {
		var image = 
		$(this).attr('src','img/promoter_glow.png')
	})
	.mouseout(function() {
		$(this).attr('src','img/promoter.png')
}); 

$('.promoter').on( 'click', function(){
	$('#timeline').show(1000);
	$('#timeline1').hide();
	$('#timeline2').hide();
})

//client image glow
$('.client img')
	.mouseover(function() {
		var image = 
		$(this).attr('src','img/client_glow.png')
	})
	.mouseout(function() {
		$(this).attr('src','img/client.png')
});

$('.client').on( 'click', function(){
	$('#timeline2').show(1000);
	$('#timeline').hide();
	$('#timeline3').hide();
})

//glub goer image glow
$('.clubGoer img')
.mouseover(function() {
		var image = 
		$(this).attr('src','img/clubGoer_glow.png')
	})
	.mouseout(function() {
		$(this).attr('src','img/clubGoer.png')
});

$('.clubGoer').on( 'click', function(){
	$('#timeline3').show(1000);
	$('#timeline').hide();
	$('#timeline2').hide();
})

$('#restart').click(function() {
    location.reload();
});

}).call(this);
