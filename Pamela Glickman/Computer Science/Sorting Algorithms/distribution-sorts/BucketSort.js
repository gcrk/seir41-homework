function bucketSort(items) {

  return items;
}

function bucketSort(items){
  let sortedItems = [];
  // Creates the buckets
  let negativeNums = [];
  let singleDigitNums = [];
  let twoDigitNums = [];
  let largeNums = [];
  // Sorts items into buckets
  items.forEach(num => {
    numString = String(num);
    if (numString[0] === "-") {
      negativeNums.push(num);
    } else if (numString.length > 2) {
      largeNums.push(num);
    } else if (numString.length === 2) {
      twoDigitNums.push(num);
    } else {
      singleDigitNums.push(num);
    }
  })
  // Add buckets to the sortedItems array
  sortedItems.push(negativeNums);
  sortedItems.push(singleDigitNums);
  sortedItems.push(twoDigitNums);
  sortedItems.push(largeNums);
  // Sorts each of the buckets
  sortedItems.forEach(array => {
    for (let i=0; i <array.length; i++ ) {
      if (array[i] > array[i+1]) {
        const value = array[i];
        array[i] = array[i+1];
        array[i+1] = value;
      }
    }
  })
  return sortedItems.flat()
}

module.exports = bucketSort;
