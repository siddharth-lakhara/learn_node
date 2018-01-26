const http = require('http');

let url = process.argv[2];

http.get(url, (response)=>{
	let dataString = '';
	response.on('data', (data)=>{
		dataString += data.toString();
	});
	response.on('end', ()=>{
		let char = dataString.length;
		console.log(char);
		console.log(dataString);
	});
});
