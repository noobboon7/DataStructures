const radixSort = (arr) => {
  let largestNum = mostDigits(arr);
  
  for (let k = 0; k < largestNum; k++) {
    let digitBucket = Array.from({length: 10}, () => []);

    for (let num of arr) {
      const digit = getDigit(num, k);   //get the correct index for the bucket 
      digitBucket[digit].push(num);    //pushing number into correct bucket 
    }
    console.log(digitBucket);
    arr = [].concat(...digitBucket);    //merges all of the arrays
  }
  return arr;
};

const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

const digitCount =(num) => {
  if(num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

const mostDigits = (nums) => {
  let maxDigits = 0;
  for(let num of nums) {
    maxDigits = Math.max(maxDigits, digitCount(num));
  }
  return maxDigits;
};

const nArr = [5,32,34,6,21452,2,24,54 ,678,9,7,42234,5424,56,75324,542,52,3,1];
const nArr2 = [5,32,56,542,52,3,1];
console.log(radixSort(nArr));
// console.log(mostDigits(nArr));
/////////////// NOTES////////////
// this is not a compare sort algo
// BigO notation of radixSort timeComplexity: O(nk) -> n = length of number; k = number of digits(average)
// space Complexity: O(n + k)