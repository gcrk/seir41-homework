function bubbleSort(array) {
    // Make some sort of loop that keeps happening if there were any swaps
    // that happened this turn

    // reset swapHappened to false each time so we can detect if a swap
    // happened in this specific iteration.

    // Make another loop (inside the first one) to go through one
    // round of swapping from the start of the list to the end

    // Inside inner loop:
    // compare each pair of elements near each other
    // swap them if the bigger one was at a lower index.

    // Make sure to keep track of whether a swap happened!

    // After both loops have exited, remember to return the array

    let sorted = array.slice();
    let sortCount = 0;

    for (i = 0; i < sorted.length; i++) {
      a = sorted[i];
      b = sorted[i + 1];

      if (i === (sorted.length - 1) && sortCount === 0) {
        console.log('----------------------------------------------------- FINISHED');
        return sorted;
      }

      else if (i === (sorted.length - 1) && sortCount > 0) {
        console.log('+++++++++++++++++++++ finished array but needs refactoring');
        bubbleSort(sorted);
      }

      else if (b < a) {
        console.log('********************** else swap');
        sorted[i] = b;
        sorted[i + 1] = a;
        sortCount++;
      }

      else {
        console.log('--------------------- else last');
        a;
        b;
        sortCount;
      }

      console.log(`Array step: ${i}`);
      console.log(`Sort: ${sortCount}`);
      console.log(`Output array ${sorted}`);

    };

    // return ([sorted, array]);
}

// module.exports = bubbleSort;

console.log(bubbleSort([12,6,3,7,13,8]));
