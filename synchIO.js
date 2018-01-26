const fs = require('fs');

let buf = fs.readFileSync(process.argv[2]);
let data = buf.toString();
let dataArray = data.split('\n');
let result = dataArray.length - 1;

console.log(result);
