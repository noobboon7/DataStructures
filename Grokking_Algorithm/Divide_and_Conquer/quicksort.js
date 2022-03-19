const quickSortJv = (arr) => {
  if (arr.length < 2) return arr;
  const pivot = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSortJv(left), pivot, ...quickSortJv(right)];
}

console.log(quickSortJv([3, 2, 1, 4, 5, 6, 7, 8, 9, 10]));

/**
 * Quick array sorting
 * @param {Array} array Source array
 * @returns {Array} Sorted array
 */
const quickSort = array => {
  if (array.length < 2) return array;
  const pivot = array[0];
  const keysAreLessPivot = array.slice(1).filter(key => key <= pivot);
  const keysAreMorePivot = array.slice(1).filter(key => key > pivot);
  return [
    ...quickSort(keysAreLessPivot),
    pivot,
    ...quickSort(keysAreMorePivot)
  ];
};

console.log(quickSort([10, 5, 2, 3])); // [2, 3, 5, 10]