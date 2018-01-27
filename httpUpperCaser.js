const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res)=>{
	let bufferString = '';
	req.on('data', (data)=>{
		bufferString += data.toString();
	});
	req.on('end', ()=> {
		bufferString = bufferString.toUpperCase();
		//console.log(bufferString);
		let readable = require('stream').Readable;
		let stream = new readable();
		stream.push(bufferString);
		stream.push(null);
		stream.pipe(res);
	});

});

server.listen(Number(process.argv[2]));
