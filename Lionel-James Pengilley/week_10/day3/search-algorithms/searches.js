function binarySearch(arr, element){
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === element) {
        return i;
      }
    }
    return -1
}

// Works with node, but not the test. Why?
function recursiveBinarySearch(arr, element){
  console.log(arr.length);
  let mid = Math.floor(arr.length / 2);
  let end = arr.length - 1;
  function helper(){
    if (arr.length === 1 && arr[0] !== element) {
      console.log("value not found");
      return -1;
    }
    if (arr[mid] === element) {
      console.log("value found!");
      console.log(mid);
      return mid;
    } else if (arr[mid] > element) {
      console.log("to the left");
      mid = Math.floor(mid / 2);
      return helper();
    } else if (arr[mid] < element) {
      console.log("to the right");
      mid = mid + Math.floor((end - mid) / 2);
      return helper();
    }
  }
  helper();
}

recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 7);

    //  search through the array recursively for the element
    //  you may need to add more parameters to this function!
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found

module.exports = {
    binarySearch,
    recursiveBinarySearch
}
