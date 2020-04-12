function linearSearch(arr, val){
  for(let [idx, v] of arr.entries()){
      if(v === val) return idx;
  }
  return -1;
}


const numArr = Array.from({length: 40}, () => Math.floor(Math.random() * 40))
console.log(numArr)
console.log(linearSearch(numArr, 23))

//////////////// NOTES//////////////// 
// built in linear search algos in Javascript 
// indexOf, includes, find, findIndex