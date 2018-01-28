const fs = require('fs');
const path = require('path');

let modularFilter = (dir, fileExt, callBackFn)=>{
	fs.readdir(dir, (err, list)=>{
		let filterList = [];
		if (err)
			return callBackFn(err);
		filterList = list.filter((file_name)=>{
			if (path.extname(file_name) === '.'+fileExt)
				return true;
		});
		return callBackFn(null, filterList);
	});
};

module.exports = modularFilter;
