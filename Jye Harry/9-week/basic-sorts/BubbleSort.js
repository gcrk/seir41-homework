function bubbleSort(array) {
  // Make some sort of loop that keeps happening if there were any swaps
  // that happened this turn
  let swapHappened = true;
  while (swapHappened) {
    swapHappened = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        const temp = x[i];
        x[i] = x[i+1];
        x[i+1] = temp;
        swapHappened = true;
      }
    }
  }
  return array;
}

module.exports = bubbleSort;
