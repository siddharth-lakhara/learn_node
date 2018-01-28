const filterFn = require('./modularFilter');
// const dir = process.argv[2];
// const fileExt = process.argv[3];

function filter(dir, fileExt){
	let retVar = filterFn(dir, fileExt, (err, fileList)=>{
		// console.log(dir);
		// console.log(fileExt);

		if (err){
		//return console.error(err);
			return err.code;
		}

		for (let p in fileList) {
		//console.log(fileList[p]);
			return fileList;
		}

	});

	return retVar;
}

module.exports = filter;
