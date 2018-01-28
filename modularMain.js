const filterFn = require('./modularFilter');
const dir = process.argv[2];
const fileExt = process.argv[3];

filterFn(dir, fileExt, (err, fileList)=>{
	if (err){
		return console.error(err);
	}

	for (let p in fileList) {
		console.log(fileList[p]);
	}

});
