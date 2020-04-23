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

// 