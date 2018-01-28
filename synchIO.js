const fs = require('fs');

// let buf = fs.readFileSync(process.argv[2]);
function calcLines(fileName){
	if (typeof fileName != 'string')
		return 'Error: File name as string expected';

	let buf = fs.readFileSync(fileName);
	let data = buf.toString();
	let dataArray = data.split('\n');
	let result = dataArray.length - 1;
	return result;
}
// console.log(result);

module.exports = calcLines;
