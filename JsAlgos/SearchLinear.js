function linearSearch(arr, val){
  for(let [idx, v] of arr.entries()){
      if(v === val) return idx;
  }
  return -1;
}


const numArr = Array.from({length: 5}, () => Math.floor(Math.random() * 5))
console.log(numArr)
console.log(linearSearch(numArr, 4));

//////////////// NOTES//////////////// 
// built in linear search algos in Javascript 
// indexOf, includes, find, findIndex