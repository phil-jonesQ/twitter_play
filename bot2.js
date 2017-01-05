console.log ("The Bot is starting...");

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

var tweet = {
	
	status: '#PJSoftware #PJ'
	
}

T.post('statuses/update', tweet, tweeted);

function tweeted (err,data,response){
	if (err) {
		console.log("Something went wrong");
		//console.log(err);
	}else {
		console.log("It worked!");
		//console.log(response);
	}
}
