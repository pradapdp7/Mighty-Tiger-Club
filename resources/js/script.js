$(document).ready(function() {
	$(".about-section").waypoint(function(direction) {
		if(direction=="down"){
		$(".nav").add class(".sticky-nav");
	    }
	    else {
	    	$(".nav").remove class(".sticky-nav");

	    }
	})

});
