const mergeSortArrays = (arr1, arr2) => {
  if(arr1.length === 0) return arr2;
  if(arr2.length === 0) return arr1;
  
  const merged = [];
  let arr1Item = arr1[0],
      arr2Item = arr2[0],
      i = 0,
      j = 0;

  while (arr1Item || arr2Item) {
    if(!arr2Item || arr1Item < arr2Item){
      merged.push(arr1Item);
      i++;
      arr1Item =  arr1[i];
    } else {
      merged.push(arr2Item);
      j++; 
      arr2Item =  arr2[j];
    }
  }
  console.log(merged);
  return merged;
};


mergeSortArrays([0,3,4,31], [4,6,30]);