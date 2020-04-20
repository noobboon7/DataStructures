const insertionSort = (arr) => {
  let cur, j, i;

  for(i = 1; i < arr.length; i++){
    cur = arr[i];
    for (j = i-1; arr[j] >= cur && j>=0; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = cur;
  }
  return arr; 
}

let randArr = [2, 6, 3, 7, 8, 1, 56, 456, 4, 3, 87, 43];

console.log(insertionSort(randArr));

// worst case On^2 
// if arr is semi sorted then better...