function bucketSort(items) {
  let numOfBuckets = Math.floor(Math.sqrt(items.length));
  let average = items.reduce( (accumulator, currentValue, currentIndex, array) => accumulator + currentValue ) / items.length;
  console.log(numOfBuckets);
  console.log(average);
  

  return items;
}

bucketSort([2, 5, 4, 12, 10, 9])

module.exports = bucketSort;
