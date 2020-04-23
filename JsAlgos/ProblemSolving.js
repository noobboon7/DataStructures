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
console.log(zeroSum([-4,-3,-2,-1,0,1,2,3,10]));