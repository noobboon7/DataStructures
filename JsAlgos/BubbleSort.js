function naiveBubbleSort(arr){
  for(let i = arr.length; i > 0; i--){
    for(let j = 0; j < i - 1; j++){
      if(arr[j] > arr[j + 1]){ //swap num if greater
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}

function es6NaiveBubbleSort(arr){
  const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]; 

  for(let i = arr.length; i > 0; i--){
    for(let j = 0; j < i -1; j++){
      if(arr[j] > arr[j+1]){
        swap(arr, j, j+1);
      }
    }
  }

  return arr;
}
// optimized for arrays that are nearly sorted 
function bubbleSort(arr){
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
    let noSwaps;

		for (let i = arr.length; i > 0; i--) {
      noSwaps = true;
			for (let j = 0; j < i - 1; j++) {
				if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
          noSwaps = false;
				}
      }
      if(noSwaps) break;
		}
		return arr;
}

let randArr = [2,6,3,7,8,1,56,456,4,3,87,43];

// console.log(naiveBubbleSort(randArr));
console.log(es6NaiveBubbleSort(randArr));
console.log(bubbleSort(randArr));

// not used very often, use if almost sorted 
// big O is On^2
// best case On 