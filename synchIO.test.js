const synch = require('./synchIO');

test('Testing testFile.txt: ', ()=>{
	expect(synch('./testFile1.txt')).toBe(6);
});

test('Testing testFile.txt: ', ()=>{
	expect(synch('./testFile2.txt')).toBe(8);
});

test('Testing with file that doesnt exist: ', ()=>{
	expect(synch('./testFile3.txt')).toThrow('no such file or directory');
});

test('Testing with null: ', ()=>{
	expect(synch(null)).toBe('Error: File name as string expected');
});

test('Testing with undefined: ', ()=>{
	expect(synch()).toBe('Error: File name as string expected');
});
