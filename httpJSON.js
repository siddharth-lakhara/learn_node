const url = require('url');
const http = require('http');

function parseTime(time){
	return {
		hour: time.getHours(),
		minute: time.getMinutes(),
		second: time.getSeconds()
	};
}

function unixTime(time){
	return {unixtime: time.getTime()};
}

let server = http.createServer((req, res)=>{
	let incomingURL = url.parse(req.url, true);
	let path = incomingURL.pathname;
	let query = incomingURL.query.iso;
	let time = new Date(query);
	let response;

	if (path === '/api/parsetime'){
		response = parseTime(time);
	}

	if (path === '/api/unixtime'){
		response = unixTime(time);
	}

	res.writeHead(200, { 'Content-Type': 'application/json' });
	res.end(JSON.stringify(response));
});

server.listen(process.argv[2]);
