function getFeed(userId) {

	var userId = $('input#searchterm').val();
	
	var feed = $("div#feed");

	//keyword.html(userId);

	var htmlStr = '<a class="twitter-timeline" target="_blank" screen-name=\"' + userId +'\" href="https://twitter.com/' + userId + '\" data-widget-id="706224359510118400">Tweets by @' + userId + '</a>' +
					'<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\"://platform.twitter.com/widgets.js\";fjs.parentNode.insertBefore(js,fjs);}}(document,\"script\",\"twitter-wjs\");</script>';

	console.log(htmlStr);		
	feed.html(htmlStr);
}