const sumJv = (array) => {
	if (array.length === 1) return array[0];
	return array[0] + sumJv(array.slice(1));
};

/**
 * Sums values in the array by recursive
 * @param {Array} array Array of numbers
 * @returns {number} Sum of the numbers
 */
const sum = (array) => (array.length === 0 ? 0 : array[0] + sum(array.slice(1)));

console.time("sum");
console.log(sum([1, 2, 3, 4])); // 10
console.timeEnd("sum");

console.time("sumJv");
console.log(sumJv([1, 2, 3, 4])); // 10
console.timeEnd("sumJv");
