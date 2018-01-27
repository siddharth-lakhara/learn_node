const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res)=>{
	let readStream = fs.createReadStream(process.argv[3]);
	//let writeStream = fs.createWriteStream(res);
	readStream.pipe(res);
});

server.listen(process.argv[2]);
