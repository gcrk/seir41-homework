function quickSort(array){
  if (array.length <= 1) {
    return array;
  }
  const pivot = array.pop();
  const lowerArray = [];
  const higherArray = [];
  for (let i=0; i < array.length; i++) {
    if (array[i] < pivot) {
      lowerArray.push(array[i]);
    } else {
      higherArray.push(array[i]);
    }
  }
  return quickSort(lowerArray).concat(pivot, quickSort(higherArray));
}

module.exports = quickSort;
