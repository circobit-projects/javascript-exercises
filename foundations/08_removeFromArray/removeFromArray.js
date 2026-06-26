const removeFromArray = function(arrayToModify, ...args) {
	let modifiedArray = arrayToModify;

	for (const arg of args) {
		modifiedArray = modifiedArray.filter((item) => item !== arg);
	};
	return modifiedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
