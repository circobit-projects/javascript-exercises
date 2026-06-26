const sumAll = function(int1, int2) {
	let lowestNum = 0;
	let highestNum = 0;

	// Check if the arguments are not a number
	if (isNaN(int1) && isNaN(int2)) {
		return "ERROR";
	// Check if numbers are negative
	} else if (int1 < 0 || int2 < 0) {
		return "ERROR";
	// Check if numbers are not integers
	} else if (!Number.isInteger(int1) || !Number.isInteger(int2)) {
		return "ERROR";
	};

	if (int1 < int2) {
		lowestNum = int1;
		highestNum = int2;
	} else {
		lowestNum = int2;
		highestNum = int1;
	};

	let integers = [];
	let sumOfEveryInteger = 0;

	for (let i = lowestNum; i <= highestNum; i++) {
		integers.push(i);
	};

	for (let i = 0; i < integers.length; i++) {
		sumOfEveryInteger = sumOfEveryInteger + integers[i];
	};

	return sumOfEveryInteger;
};

// Do not edit below this line
module.exports = sumAll;
