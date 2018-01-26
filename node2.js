//let argArray = process.argv.slice(2);

function add(argArray){
	if (isValid(argArray)){
		let sum = argArray.
			map((elem)=>Number(elem)).
			reduce((prev, curr)=>prev+curr,0);
		return sum;
	}
	else {
		return 'Error: only numbers accepted';
	}
}

function isValid(argArray){
	for (let i=0; i<argArray.length; i++){
		if (typeof (argArray[i]) != 'number')
			return false;
	}
	return true;

}
//console.log(sum);
module.exports = add;
