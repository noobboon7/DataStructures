const mergeSort = (arr) => {
	if(arr.length === 0) return [];
	
};

//only works with sorted arrays 
const merge = (arr1, arr2) => {
  let sortedArr = [],
		i = 0,
		j = 0;

	while (i < arr1.length && j < arr2.length) {
		arr2[j] > arr1[i] ? (sortedArr.push(arr1[i]), i++) : (sortedArr.push(arr2[j], j++))
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
// console.log(mergeSort(nArr));
console.log(merge(nArr, nArr2));