const swap = (arr, i1, i2) => [arr[i1], arr[i2]] = [arr[i2], arr[i1]];

const selectionSort = (arr) => {
  let lowest;

  for (let [i, el] of arr.entries()) {
    lowest = i;
    for (let j = i+1; j < arr.length; j ++) {
      if( arr[lowest] >  arr[j]) lowest = j;
    }
    if(i !== lowest) swap(arr, i, lowest);
  }
  return arr;
};


console.log(selectionSort([5,32,34,6,21452,2,24,54 ,678,9,7,42234,5424,56,75324,542,52,3,1]));

// big O: On^2 makes less swaps then bubbleSort