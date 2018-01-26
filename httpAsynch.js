const http = require('http');

const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];

let doneUrl1 = false;
let doneUrl2 = false;
let doneUrl3 = false;

let data1 = '';
let data2 = '';
let data3 = '';

http.get(url1, (response)=>{
	response.on('data', (data)=>{
		data1 += data.toString();
	});
	response.on('end', ()=>{
		doneUrl1 = true;
		completed();
	});
});

http.get(url2, (response)=>{
	response.on('data', (data)=>{
		data2 += data.toString();
	});
	response.on('end', ()=>{
		doneUrl2 = true;
		completed();
	});
});

http.get(url3, (response)=>{
	response.on('data', (data)=>{
		data3 += data.toString();
	});
	response.on('end', ()=>{
		doneUrl3 = true;
		completed();
	});
});

function completed(){
	if (doneUrl1 && doneUrl2 && doneUrl3){
		console.log(data1);
		console.log(data2);
		console.log(data3);
	}
}
