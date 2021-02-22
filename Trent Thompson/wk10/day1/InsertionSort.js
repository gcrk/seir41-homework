// let insertionSort = (inputArr) => {
//     let length = inputArr.length;
//     for (let i = 1; i < length; i++) {
//         let key = inputArr[i];
//         let j = i - 1;
//         while (j >= 0 && inputArr[j] > key) {
//             inputArr[j + 1] = inputArr[j];
//             j = j - 1;
//         }
//         inputArr[j + 1] = key;
//     }
//     return inputArr;
// };
// module.exports = insertionSort;
//
// function insertionSort (array) {
//   for(let i = 1; i < array.length; i++){
//     let key = array[i]
//     let j = i - 1
//     while (j >= 0 && array[j] > key){
//       array[j + 1] = array[j]
//       j = j - 1;
//     }
//     array[j + 1;]
//   }
//   return array
// };
//         [66,55,44]
// function insertionSort (array){
//   for (let i = 1; i < array.length; i++){
//     let key = array[i]//55
//     let j = i - 1//0
//     while (j >= 0 && array[j] > key){//0 >= 0 and 66 > 55
//       array[j + 1] = array[j] //index 1 assigned to 66
//       j = j - 1;//-1
//     }
//     array[j + 1]//
//   }
//   return array
// }
//
// [4,3,2]

//automatically start with [4]
//look at 3...is three less than four? yes it is!  so the array becomes [3,4]
//look at 2...is two less than 4...YES. so we swap them [3,2,4] then we ask is 2 < 3 YES so SWAP [2,3,4]

const myArray = [4,3,2,1,5,5,8,6]
function ttInsertion(array){
  for(let i = 1; i < array.length; i++){

    for(let j = i; j > 0; j--){
      if(array[j] < array[j - 1]){ //swap them in code block
        const temp = array[j]//store the smaller number
        array[j] = array[j - 1]//swapping the larger number up the array
        array[j -1] = temp //and the lower element is now swapped into the lower position
      } else {
        break; //other wise stop the function as its all sorted
      }
    }
  }
  return array
}

console.log(ttInsertion(myArray))
// store the current item value so it can be placed correctly
// in the sorted portion of the array

// Loop backward through the sorted portion of the array
// and scoot everything over until you find the right place to
// insert the value you're working with

// Copy each item to the next slot over, as long as the value is smaller
// than the item in the sorted array we're looking at (items[j] > value)

// We can now insert the item in its sorted location

// Remember to return the list!
