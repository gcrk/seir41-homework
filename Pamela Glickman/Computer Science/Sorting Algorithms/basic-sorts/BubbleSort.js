function bubbleSort(array) {
    // Make some sort of loop that keeps happening if there were any swaps
    // that happened this turn
    let swapHappened = true
    while (swapHappened === true) {
       // reset swapHappened to false each time so we can detect if a swap
       // happened in this specific iteration.
       swapHappened = false
       // Make another loop (inside the first one) to go through one
       // round of swapping from the start of the list to the end
       for (let i = 0; i < array.length; i++) {
          // Inside inner loop:
          // compare each pair of elements near each other
         if (array[i] > array[i+1]) {
           // swap them if the bigger one was at a lower index.
           const biggerNum = array[i]
           array[i] = array[i+1]
           array[i+1] = biggerNum
           // Make sure to keep track of whether a swap happened!
           swapHappened = true
         }
       }
    }
  // After both loops have exited, remember to return the array
  return array;
}


module.exports = bubbleSort;

//Alternate Version
//function bubbleSort(array) {
// let swapped = true; // Assume the worst.

//  let end = array.length - 1;

  // while (swapped === true) {
  //   swapped = false; // We haven't yet swapped anything; in this iteration.
  //   for (let i = 0; i < end; i++) {
  //     if (array[i] > array[i+1]) {
  //       // TODO: parallel assignment (destructuring)
  //       const temp = array[i];
  //       array[i] = array[i+1];
  //       array[i+1] = temp;
  //       [ array[i], array[i+1 ] = [ array[i+1], array[i] ]; // Destructuring for parallel assignment.
  //       swapped = true;
  //     }
  //   }
  //   end --;
  // }

  // return array; // Everything is now sorted.
//}


//module.exports = bubbleSort;
