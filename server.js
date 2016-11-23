/*eslint "no-sync": "off"*/

'use strict';
var Gun = require('gun');
var http = require('http');
var fs = require('fs');
var path = require('path');
var port = process.env.PORT || process.argv[2] || 80;

Gun.log.squelch = true;

var gun = new Gun();

var server = new http.Server(gun.wsp.server);

server.on('request', function (req, res) {
	if (req.url === '/gun.js' || req.url === '/gun') {
		return;
	}
	if (req.url === '/') {
		req.url = '/index.html';
	}
	var file = path.join(__dirname, 'www', req.url);

	try {
		file = fs.readFileSync(file, 'utf8');
		res.end(file);
	} catch (err) {
		res.writeHead(404, {
			'Content-Type': 'text/plain'
		});
		res.end('File not found :(');
	}
});

gun.wsp(server);

server.listen(port);
