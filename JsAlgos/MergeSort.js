const mergeSort = (arr) => {
	if(arr.length <= 1) return arr;
	let mid = Math.floor(arr.length/2),
	right = mergeSort(arr.slice(0, mid)),
	left = mergeSort(arr.slice(mid, ));

	return merge(left, right);
};

//only works with sorted arrays 
const merge = (arr1, arr2) => {
  let sortedArr = [],
		i = 0,
		j = 0;

	while (i < arr1.length && j < arr2.length) {
		if(arr2[j] > arr1[i]){
			sortedArr.push(arr1[i]);
			i++;
		} else{
			sortedArr.push(arr2[j]);
			j++;
		}
	}
	
	while(i < arr1.length){
		sortedArr.push(arr1[i]);
		i++;
	}
	while(j < arr2.length){
		sortedArr.push(arr2[j]);
		j++;
	}
  
	return sortedArr;
}

const nArr = [2, 6, 3, 7, 8, 1, 56, 456, 4, 3, 87, 43];
const nArr2 = [5,32,34,6,21452,2,24,54 ,678,9,7,42234,5424,56,75324,542,52,3,1];
// console.log(mergeSort(nArr2));
// console.log(merge(nArr, nArr2));

//time complexity is O(n log n) -> O(log n) is the amount of arrays its split into, 
// until you reach a single element into one array  
// -> O(n) is the amount of arrays you have to compare to merge 

//space complexity 0(n) -> the amount of arrays its going to store in memory 
// with grow on how large the array is