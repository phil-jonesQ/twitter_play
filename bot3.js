console.log ("The Bot is starting...");

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

var name = {
	
	screen_name: 'phil_jones',
	count: 200
	
}


T.get('followers/list', name, gotData);

function gotData(err, data, response) {
  
  var followers = data.users;
  for (var i = 0; i < followers.length; i++) {
  console.log(followers[i].name);
  console.log(followers[i].description);
  }
  
}

