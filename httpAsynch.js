const http = require('http');

let url = [process.argv[2], process.argv[3], process.argv[4]];
let res = [];
let done=0;
for (let i=0; i<url.length; i++){
	res[i] = '';
	done++;
	get(i);
}

function get(index){
	http.get(url[index], (response)=>{
		response.on('data', (data)=>{
			res[index] += data.toString();
		});
		response.on('end', ()=>{
			done--;
			completed();
		});
	});
}

function completed(){
	if (!done){
		for (let i=0; i<url.length; i++){
			console.log(res[i]);
		}
	}
}
