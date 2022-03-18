const recursiveBinarySearch = (arr, target) => {
	if (!arr.length) return false;
	let mid = Math.floor((0 + (arr.length)) / 2);
	if (arr[mid] === target) return true;
	if (arr[mid] < target) return recursiveBinarySearch(arr.slice(mid), target);
	if (arr[mid] > target) return recursiveBinarySearch(arr.slice(0,mid-1), target);
};

const orderedArray = [1,2,3,4,5,6,7,8,9,10];

console.log(recursiveBinarySearch(orderedArray, 8));