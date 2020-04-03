class HashTable{

}

// example of a hash function 
function hash(key, arrLength){
  let total = 0,
  primeNum = 31;    //using a prime number will reduce the number of collisions 
  for(let i = 0; i < Math.min(key.length, 100); i++){  // cut off at 100 characters 
    let char = key[i],
    value = char.charCodeAt(0) - 96;

    total = (total * primeNum + value) % arrLength;  
  }
  return total;
}