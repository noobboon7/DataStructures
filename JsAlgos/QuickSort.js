const quickSort = (arr) => {
  
  
  
  return arr;
}

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
  console.log(arr);
  return arr;
}



const nArr = [5,32,34,6,21452,2,24,54 ,678,9,7,42234,5424,56,75324,542,52,3,1];

console.log(pivot(nArr));