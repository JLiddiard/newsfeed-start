$(document).ready(function() {
	$.ajax('https://api.parse.com/1/classes/NewsItem', 
	  {
	    beforeSend: function(request) {
	      request.setRequestHeader('X-Parse-Application-Id', 'N8BdZbMCk8b30MQiplpqiDtqGm3JS6OBBtJJXMmu');
		  request.setRequestHeader('X-Parse-REST-API-Key', 'U8TKG1CffvaX6WRy1yW7cdcNAR4S3RdYIocu6sUF');
		}
	  }
	).done(function(response) {
	  var newsFeed = $(".newsfeed");

	  $.each( response.results, function(i, val) {
	  	console.log(response);
	  	var titleContainer = "<h1>" + val.title + "</h1>";
	  	var bodyContainer = "<p>" + val.body + "</p>";

	  	newsFeed.append(titleContainer, bodyContainer);
	  });
	});
    
});