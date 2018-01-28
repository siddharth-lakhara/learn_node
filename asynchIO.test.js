const asynch = require('./asynchIO');

global.console = {
	warn: jest.fn(),
	log: jest.fn()
};

test('Testing testFile1.txt: ', ()=>{
	let callback = (retData)=>{
		expect(retData).toBe(6);
	};
	asynch('./testFile1.txt', callback);
});

test('Testing testFile2.txt: ', ()=>{
	let callback = (retData)=>{
		expect(retData).toBe(8);
	};
	asynch('./testFile2.txt', callback);
});

test('Testing with file that doesnt exist: ', ()=>{
	let callback = (retData)=>{
		expect(retData).toBe('ENOENT');
	};
	asynch('./testFile3.txt', callback);
});

test('Testing with null: ', ()=>{
	let callback = (retData)=>{
		expect(retData).toBe('Error: provide file name as string');
	};
	asynch(null, callback);
});

test('Testing with undefined: ', ()=>{
	let callback = (retData)=>{
		expect(retData).toBe('Error: provide file name as string');
	};
	asynch(undefined, callback);
});
