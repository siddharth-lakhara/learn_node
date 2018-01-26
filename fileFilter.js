const path = require('path');
const fs = require('fs');

let file_path = process.argv[2];
let ext = process.argv[3];

fs.readdir(file_path, (err, list)=>{
	if (err)
		console.error(err);
	else {
		//console.log('Filtering for ext: ', ext);
		list.filter((file_name)=>{
			//console.log('File_name: ', file_name, ' ext: ', path.extname(file_name));
			if (path.extname(file_name) === ('.'+ext)) {
				console.log(file_name);
				return true;
			}
		});
		//console.log(listFiltered);
	}
});
