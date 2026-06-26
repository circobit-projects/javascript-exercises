const repeatString = function(string, num) {
	if (num < 0) {
		return "ERROR";
	};

	let stringToReturn = "";
	while (num > 0) {
		stringToReturn = stringToReturn + string;
		num--;
	};

	return stringToReturn;
};

// Do not edit below this line
module.exports = repeatString;
