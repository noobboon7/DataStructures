class HashTable {
  constructor(size =53){
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
 
  set(key, val){                //add condition that alerts the user about duplicate keys
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
  
  keys(){
    let keyArr = []; 

    this.keyMap.forEach(pos => {
			if(pos.length > 1) {
				pos.forEach(subArr => {
					if (!keyArr.includes(subArr[0])) keyArr.push(subArr[0]);
				});
			} else if(pos) {
				keyArr.push(pos[0][0]);
			}
		});
		return keyArr;    
  }

  values(){
    let valArr = [];

    this.keyMap.forEach(pos => {
      if(pos){
        pos.forEach(subArr => {
         if (!valArr.includes(subArr[1])) valArr.push(subArr[1]);
        });
      }else if(pos){
        valArr.push(pos[0][1]);
      }
    });
    return valArr;
  }
}

const hash = new HashTable();
hash.set('pudding', 2);
hash.set('pudding', 2);
hash.set('pudding', 2);
hash.set('pudding', 2);
hash.set('banana', 6);
hash.set('apple', 8);
hash.set('meat', 3);
hash.set('tea', 12);
hash.set('tomato', 5);
hash.set('fish', 3);
hash.set('juice',4);
hash.set('ramen', 10);
// console.log(hash.get("apple"));
console.log(hash.values());
console.log(hash.keys());
// hash.values();

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