var http = require('http');

var server = http.createServer(function (req, res) {
	res.writeHead(200, {"Content-Type": "text/plain"});
  	res.end("Hello World\n");

});


var port = process.env.port || 9000;
server.listen(port, function() {
	console.log("listening on %d", port);
});
