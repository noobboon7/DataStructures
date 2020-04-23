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

console.log(isAnagram('iceman', 'cinema'));

