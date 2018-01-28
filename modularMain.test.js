const modularMain = require('./modularMain');
let dir = '~/Downloads/';

test('Listing .md in given directory: ', ()=>{
	let callback = (err, data)=>{
		expect(data).toEqual(['Add friend.md', 'Transaction_history.md']);
	};
	modularMain(dir, 'md', callback);
});

test('Listing .abc -> doesnt exist: ', ()=>{
	let callback = (err, data)=>{
		expect(data).toEqual([]);
	};
	modularMain(dir, 'abc', callback);
});

test('Listing for unexisting directory: ', ()=>{
	let callback = (err, data)=>{
		expect(data).toBe('ENOENT');
	};
	modularMain('~/XYZ/', 'md', callback);
});
