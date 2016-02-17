
//$('li').fadeTo('slow', 0.25);
	//$( this ).hover(function(){

//});//


$( "li" ).hover(function() {
		$(this).stop().animate({"opacity": "0.25"}, "slow");
	},
			function() {
				$(this).stop().animate({"opacity": "1"}, "slow");
			});		 

$("li").on("click", function() {
    $(this).css("background", "red");
})



//$(document).ready(function(){
         /* I'm using the "container" class. You could use any class or ID*/
//		$(".container img").hover(
//			function() {
//				$(this).stop().animate({"opacity": "0.2"}, "slow");
//			},
//			function() {
//				$(this).stop().animate({"opacity": "1"}, "slow");
//			});		 
//	});







//var $li = $('li');




//$( "li.fade" ).hover(function() {
  //$( this ).fadeOut( 100 )  
   //$( this ).fadeIn( 500 );
//});
