function bubbleSort(array) {

    let swapHappened;

    do {
      swapHappened = false;
      for (var i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
          let temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
          swapHappened = true;
        }
      }
    } while (swapHappened);
    return array;
}

module.exports = bubbleSort;
