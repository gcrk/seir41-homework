function insertionSort (array) {
  let sortedArray = []
  // Loop through each element
  for (let i = 0; i < array.length; i++) {
    // store the current item value so it can be placed correctly
    // in the sorted portion of the array
    const itemValue = array[i]
    // pushes the first item into the sorted array
    if (sortedArray.length === 0) {
      sortedArray.push(itemValue);
    }
    else {
      if (itemValue > sortedArray[sortedArray.length - 1]) {
        // pushes the item to the end of the sorted array if it's larger than all the items in the sorted array
        sortedArray.push(itemValue)
      } else if (itemValue < sortedArray[0]) {
         // add the item to the start of the sorted array if it's smaller than all the items in the sorted array
        sortedArray.unshift(itemValue)
      } else {
      // Loop backward through the sorted portion of the array
      // and scoot everything over until you find the right place to
      // insert the value you're working with
         for (let j = sortedArray.length; j > 0; j--) {
           if (sortedArray[j] >= itemValue && sortedArray[j-1] <= itemValue) {
             // Copy each item to the next slot over, as long as the value is smaller
             // than the item in the sorted array we're looking at (items[j] > value)
             // We can now insert the item in its sorted location
            // I thought a splice would be simpler, haha
            sortedArray.splice(j, 0, itemValue)
        }
      }
      }
    }
   }
  // Remember to return the list!
  return sortedArray;
}

module.exports = insertionSort;

//Alternate Version
//function insertionSort (items) {
// for (let i = 0; i < items.length; i++) {
//   const item = items[i];

//   // preserve j in scope after the for loop block.
//   for (var j = i-1; j >= 0 && items[j] > item; j--) {
//     items[j+1] = items[j];
//   }
//   items[j+1] = item; // insertion
//  }
// return items;
//}
//module.exports = insertionSort;
