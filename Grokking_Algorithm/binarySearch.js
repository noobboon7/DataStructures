const binary_search = (arr, item) => {
	let low = 0,
		high = arr.length - 1;

	while (low <= high) {
    console.count("Ran")
		let mid = Math.floor((low + high) / 2);
		let guess = arr[mid];

		if (guess === item) return mid;

		guess > item ? (high = mid - 1) : (low = mid + 1);
	}

	return null;
};

const my_arr = [1, 3, 5, 7, 9];
// array is generated with 100 undefined elements
// second argument in Array.from will be the value of the element
const mediumArr = Array.from({ length: 100 }, (el, idx) => idx + 1);
const exercise1 = Array.from({ length: 128 }, (el, idx) => idx + 1);
const exercise2 = Array.from({ length: 256 }, (el, idx) => idx + 1);

console.log(binary_search(my_arr, 3)); // 1
console.log(binary_search(my_arr, -1)); // null
console.log(binary_search(mediumArr, 50)); // 49
console.log(binary_search(exercise1, 30)); // 49
console.log(binary_search(exercise2, 60)); // 49
