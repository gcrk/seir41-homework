function insertionSort (items) {
  // Loop through each element
  // store the current item value so it can be placed correctly
  // in the sorted portion of the array

  // Loop backward through the sorted portion of the array
  // and scoot everything over until you find the right place to
  // insert the value you're working with

  // Copy each item to the next slot over, as long as the value is smaller
  // than the item in the sorted array we're looking at (items[j] > value)

  // We can now insert the item in its sorted location

  // Remember to return the list!

  let itemsSorted = [items[0]]
  for (i = 1; i < items.length; i++){

      if (items[i] >= itemsSorted[itemsSorted.length-1]){
        itemsSorted[itemsSorted.length] =  items[i]
      }

      if ((items[i] < itemsSorted[itemsSorted.length-1])){
         for (k = 0; k < itemsSorted.length; k++){
            if (items[i]<=itemsSorted[k]){
                itemsSorted.splice(k,0,items[i]);
                break;
            }

        }
      }
  }





  return itemsSorted;
}

console.log(insertionSort([7,8,9,1,2,3,13,15]));
