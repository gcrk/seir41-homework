function binarySearch(arr, element){
  let index = Math.floor(arr.length / 2);
  //  search through the array non-recursively for the element
  for (let i = 0; i <= Math.floor(Math.log2(arr.length)); i++) {
      if (arr[index] === element) {
          //  if the element is found, return the index at which it was found
          return index;
      } else {
          if (arr[index] > element) {
              index = Math.floor(index / 2);
          } else {
              index = Math.floor(index / 2) + index;
          }
      }
  }
  return -1;
}

function recursiveBinarySearch(arr, element, numSplits=0, index=Math.floor(arr.length / 2)){
  //  search through the array recursively for the element
  //  you may need to add some default parameters to this function!
  if (arr[index] === element) {
    //  if the element is found, return the index at which it was found
    return index;
  } else if (numSplits >= Math.log2(arr.length)) {
    //  if the element is not found, return -1
    return -1;
  }
  if (arr[index] > element) {
     index = Math.floor(index / 2);
  } else {
     index = Math.floor(index / 2) + index;
  }
 return recursiveBinarySearch(arr, element, numSplits+1, index);
}

module.exports = {
    binarySearch,
    recursiveBinarySearch
}
