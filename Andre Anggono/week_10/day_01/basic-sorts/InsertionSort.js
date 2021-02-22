function insertionSort(items) {
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
	let currValue = 0;

	for (let i = 1; i < items.length; i++) {
		currValue = items[i];

		for (var j = i - 1; j >= 0; j--) {
			if (items[j] > currValue) {
				items[j + 1] = items[j];
			} else break;
		}
		items[j + 1] = currValue;
	}

	return items;
}

module.exports = insertionSort;
