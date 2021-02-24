function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const left = [];
  const right = [];
  const pivot = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

module.exports = quickSort;
