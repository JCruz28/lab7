'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$(".likeBtn").click(pushedLike);
}

function pushedLike(){
	console.log("In pushedLike function");
	//ga("create", "UA-134940495-1", "auto");
	ga("send", "event", "like", "click");
}
