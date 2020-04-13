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

const numArr = [...Array(30).keys()];

console.log(binarySearch(numArr,20));