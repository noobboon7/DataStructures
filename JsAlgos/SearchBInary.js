function binarySearch(arr, el){
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  while(arr[middle] !== el && left <= right){ 
    if(el < arr[middle]) right = middle - 1;
    else left = middle + 1;
    middle = Math.round((left + right) / 2);
  }
  return arr[middle] === el ? middle : -1;
}

const numArr =  [1,2,3,4,5,6,7,65,4,356,20,345,24,5876,345,35,88] //[...Array(30).keys()];

console.log(binarySearch(numArr,88));