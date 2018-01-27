const net = require('net');
//let date = new Date();
//console.log(date.getMonth());

function append(arg){
	if (arg < 10) {
		arg = '0'+ arg;
	}
	return arg;
}

function getData(){
	let d = new Date();
	return d.getFullYear() + '-' +
  append(d.getMonth() + 1) + '-' +
  append(d.getDate()) + ' ' +
  append(d.getHours()) + ':' +
  append(d.getMinutes());
}

let server = net.createServer((socket)=>{
	let data = getData();
	socket.write(data);
	socket.end('\n');
});
server.listen(process.argv[2]);
