const add = require('./node2');

test('Testing with integer: ', () =>
	expect(add([1,2])).
		toBe(3));

test('Testing with any string: ', () =>
	expect(add(['a', 0])).
		toBe('Error: only numbers accepted')
);

test('Testing with null: ', () =>
	expect(add([null, 0])).
		toBe('Error: only numbers accepted')
);

test('Testing with any string: ', () =>
	expect(add([undefined, 0])).
		toBe('Error: only numbers accepted')
);

test('Testing with float: ', () =>
	expect(Number(add([0.1, 0.2]).toFixed(1))).
		toBe(0.3)
);
