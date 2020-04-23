////////////////// checklist//////////////
// 1.understand the problem
// 2. explore concrete examples 
// 3. break it down
// 4. solve/simplify 
// 5. look back and refactor

// devise a PLAN for the problem and Master common problem solving patterns
// Restate the problem, what are the inputs, outputs? are answers within input? 
// how to label important data? 

// test code with edgecases e.g. empty, invaid, simple, complex

// write sudoCode for the code, steps of diagrams 

// implement your sudo code, go the naive route if 
// you cannot write the more complex version 

// look back at you code and try to optimize it: easy to read, performance (bigO)

////////////////////////////////////////////////////////////////////////////
// these are some problem solving approaches/patterns 

// Frequnecy pattern using hashs
function isAnagram(first, second) { 
  if(first.length !== second.length) return false;

  // make the hash map 
  const lookUp = [...first].reduce((acc, cur) => {
    acc[cur] ? acc[cur] ++ : acc[cur] = 1;
    return acc;
	}, {});

  for(let letter of second){
    !lookUp[letter] ? false : lookUp[letter]--;
  }
  return true;
}


// Mulitiple pointer example 
const zeroSum = (arr) => {
  let left = 0,
      right = arr.length -1,
      sum;

  while(left < right){
    sum = arr[left] + arr[right];
    if(sum === 0) return [arr[left], arr[right]];
    else if(sum > 0) right--;
    else left++;
  }
}
// console.log(zeroSum([-4,-3,-2,-1,0,1,2,3,10]));

// second example 
const countUniqueValues  = (arr) => {
  if(arr.length === 0) return 0;
  let i = 0;
  for(let k = 1; k < arr.length; k++){
    if(arr[i] !== arr[k]){
      i++;
      arr[i] = arr[k];
    }
  }
  return i + 1;
};

// console.log(countUniqueValues([1,1,1,1,1,2,2,2,3,3,4,4,4,5,6,6,6,6,7,7,7,8]));

// sliding window approach 
function maxSubArraySum(arr, num) {
  let maxSum = 0,
      tempSum = 0;
  if(arr.length < num) return null; 
  // add n consecutive numbers in arr 
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// console.log(maxSubArraySum([2,6,9,2,1,8,5,6,3],3));

// divide and conquer
function search(arr, val) {
  let min = 0,
  max = arr.length - 1,
  middle;

  while(min <= max){
    middle = Math.round((min + max) / 2);
    // let cur = arr[middle];

    if(arr[middle] < val) min = middle + 1;
    else if(arr[middle] > val) max = middle - 1;
    else return middle +1; 
  }
  return -1;
}
console.log(search([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],17));