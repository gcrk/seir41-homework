function mergeSort(arr) {
  const size = arr.length;
  const middle = Math.floor(size / 2);
  if (size <= 1) return arr;
  return merge(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle)));
}


// HELPER FUNCTION: merge two sorted arrays
function merge(arr1, arr2) {
  var result = [];

  while (arr1.length && arr2.length) {
    if(arr1[0] <= arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }

  return result.concat(arr1, arr2);
}

module.exports = mergeSort;
