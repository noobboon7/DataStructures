const quickSort = (arr, left=0, right=arr.length-1) => {
  if(left < right){
    let pvtIdx = pivot(arr, left, right);

    quickSort(arr, left, pvtIdx-1);
    quickSort(arr, pvtIdx+1, right);
  }
  return arr;
}
//helper function 
const pivot = (arr, start=0, end=arr.length+1) => {
  const swap = (arr, i1, i2) => ([arr[i1], arr[i2]] = [arr[i2], arr[i1]]);

  let pvt = arr[start],
      swapIdx = start;

  for(let i = start + 1; i < arr.length; i++){
    if(pvt > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i );
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}



const nArr = [5,32,34,6,21452,2,24,54 ,678,9,7,42234,5424,56,75324,542,52,3,1];
const nArr2 = [5,32,56,542,52,3,1];

// console.log(pivot(nArr));
console.log(quickSort(nArr));
///////////NOTES///////////
// bigO O(log n + n) -> O(n) happen when recursion is done and compares the numbers
// worst case if the array is sorted then you have o(n^2) 