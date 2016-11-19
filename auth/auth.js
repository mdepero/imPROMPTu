

var watson = require('watson-developer-cloud');


// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {

  var authorization = new watson.AuthorizationV1({
	  username: '<Text to Speech username>',
	  password: '<Text to Speech password>'
	  url: watson.TextToSpeechV1.URL
	});

	authorization.getToken(function (err, token) {
	  if (!token) {
	    console.log('error:', err);
	  } else {
	    response.writeHead(200, {"Content-Type": "text/plain"});
	    response.end(token);
	  }
	});
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");