function bubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j+1]) {
                const bub = array[j];
                array[j] = array[j+1];
                array[j+1] = bub;
            }
        }
    }
    return array;
}

console.log(bubbleSort([12,6,3,7,13,8]));

module.exports = bubbleSort;