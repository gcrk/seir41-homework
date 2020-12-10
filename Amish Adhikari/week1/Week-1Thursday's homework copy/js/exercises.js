// # Array and Functions Bonus Material
//
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
const maxOfTwoNumbers = function (a,b){
  if (a>b){
    return a;
  } else {
   return b;
}
};
console.log(`The greater number of 30 and 20 is ${ maxOfTwoNumbers(30,20) }.`)


// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.



  const maxOfThree = function(x, y, z) {
    var maxNumber;

       if (x > y && x > z){
         maxNumber = x;
       }
       else if (y > x && y > z){
         maxNumber = y;
       }
      else{
        maxNumber = z;
       }
       return maxNumber;
     };

  console.log(`The largest number is ${maxOfThree (6,18,12)}`);


// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const checkForVowel = function (vowel) {
  if (vowel == "a" || vowel == "e" || vowel == "i" || vowel == "o" || vowel == "u"|| vowel == "A" || vowel == "E" || vowel == "I" || vowel == "O" || vowel == "U"){
return true;
}else {
  return false;
}
};

console.log(`${ checkForVowel ("z")}`);

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.
const sumArray = [10,2,3,4];
const multiplyArray = [10,2,3,4];
  for(let i=0; i<sumArray.length; i++) {

}
  console.log(`${ sumArray[0]+ sumArray[1]+ sumArray[2]+ sumArray[3] } `);
  console.log(`${ sumArray[0] * sumArray[1] * sumArray[2] * sumArray[3] } `);


// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function (string){
    return string.split("").reverse().join("");
}
console.log( `${ reverseString("jag testar") }`)
// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.

const findLongestWord = function(strs) {
  let longest = '';
  for (let i = 0; i < strs.length; i++) {
    if (strs[i].length > longest.length)
    longest = strs[i];
}
return longest;
};
const findLongestLengthWord = function(arr){
var num1 = 0;
for (var i = 0; i < arr.length; i++) {
  if (arr[i].length > num1) {
    num1 = arr[i].length;
  }
}
return num1;
};

console.log( `The longest string is ${findLongestWord(["Andy", "Roman", "Murray","Angelina"])}, and length of the string is ${findLongestLengthWord(["Andy", "Roman", "Murray","Angelina"])}`);



// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.

const filterLongWords = (arr, n){
    let res = '';
    for (i = 0; i < arr.length; i++) {
        if (arr[i].length > n) {
            res = arr[i];
        }
    return res;
  }
};

console.log( `${filterLongWords(["man", "woman", "children", "teenagers"])}`);
