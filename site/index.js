"use strict";

var http = require('http');
var path = require('path');
var fs = require('fs');
var mime = require('mime');

function send404 (response) {
	response.writeHead(404, {"Content-type" : "text/plain"});
	response.write("Error 404: Resource not found");
	response.end();
}

function sendPage (response, filePath, fileContents) {
	response.writeHead(200, { "Content-type": mime.lookup(path.basename(filePath)) });
	response.end(fileContents);
}

function serverWorking (response, absPath) {
	fs.exists(absPath, function (exists) {
		if (exists) {
			fs.readFile(absPath, function (e, data) {
				if (e) send404(response);
				else sendPage(response, absPath, data);
			});
		} else send404(response);
	});
}

var server = http.createServer(function (request, response) {
	var filePath;
	if (request.url === '/') filePath = 'bus-tracker.html';
	else filePath = request.url;
	
	serverWorking(response, "./" + filePath);
});

server.listen(process.env.PORT || 8080);
console.log("Please go to http://127.0.0.1:8080");
