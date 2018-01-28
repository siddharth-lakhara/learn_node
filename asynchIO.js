const fs = require('fs');

//asynch
function calcLines(fileName, callback){
	// fs.readFile(process.argv[2], (err, data)=>{

	fs.readFile(fileName, (err, data)=>{
		if (err){
			return callback(err.code);
			//console.error(err);
		}
		else {
			let lines;
			lines = data.toString().split('\n').length - 1;
			console.log(lines);
			return callback(null, lines);
		}
	});
}

module.exports = calcLines;
