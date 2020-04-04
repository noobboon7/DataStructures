class HashTable {
  constructor(size =5){
    this.keyMap = new Array(size);
  }

	hash(key) {
		let total = 0,
			primeNum = 31; //using a prime number will reduce the number of collisions
		for (let i = 0; i < Math.min(key.length, 100); i++) {
			// cut off at 100 characters
			let char = key[i],
          value = char.charCodeAt(0) - 96;
          
			total = (total * primeNum + value) % this.keyMap.length;
		}
		return total;
  }

  set(key, val){
    const idx = this.hash(key);
    
    if(!this.keyMap[idx]){
      this.keyMap[idx] = [];
    }
    this.keyMap[idx].push([key, val]);
  }
  
  get(key){
    const idx = this.hash(key),
    curLocation = this.keyMap[idx];

    if(curLocation){
      for(let i in curLocation){  //not sure why a forEach loop isn't working? 
        if(curLocation[i][0] === key) return curLocation[i][1]; 
      }
    }
    return undefined;
  }
}

const hash = new HashTable();
hash.set('pudding', 6);
hash.set('banana', 6);
hash.set('apple', 8);
hash.set('meat', 4);
hash.set('tea', 4);
hash.set('tomato', 4);
hash.set('fish', 4);
console.log(hash.get("apple"));

console.log(hash);

//////////////////// example of a hash function ///////////////////////////////
function hashExample(key, arrLength){
  let total = 0,
  primeNum = 31;    //using a prime number will reduce the number of collisions 
  for(let i = 0; i < Math.min(key.length, 100); i++){  // cut off at 100 characters 
    let char = key[i],
    value = char.charCodeAt(0) - 96;

    total = (total * primeNum + value) % arrLength;  
  }
  return total;
}
///////////////////////////////////////////////////////////////////////////////