console.log("Array and Functions");
// Array and Functions Bonus Material
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function(a,b){
  if(a > b){
    return `largest number is:${a}`;
  }else{
    return `largest number is:${b}`;
  }
};
console.log(maxOfTwoNumbers(10,5));


// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function(a,b,c){
  if(a > b && a > c){
    return `largest number is ${a}`;
  }else if(b > a && b > c){
    return `largest number is ${b}`;
  }else{
    return `largest number is ${c}`;
  }
};
console.log(maxOfThree(10,2,5));

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

var findVowel = function(letter) {
    if(letter =='a'||letter =='e'||letter =='i'||letter =='o'||letter =='u'){
            return true;
         }else{
            return false;
         }
};
console.log(findVowel('a'));

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

const sumArray = function(array){
  let sum = 0;
  for (i = 0;i <array.length;i++){
      sum = sum + array[i];
  }
     console.log(sum);
};
sumArray([1,2,3,4,5]);

const multiplyArray = function(array){
  let multiplication = 1;
  for (i = 0;i <array.length;i++){
    multiplication = multiplication * array[i];
  }
  console.log(multiplication);
};
multiplyArray([1,2,3,4,5]);

// Bonus
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function(word){
  return word.split("").reverse().join("");
};
console.log(reverseString("abcdefgh"));

// Write a function findLongestWord that takes an array of words and returns the length of the longest one.

const findLongestWord = function(sentence){
  let sentenceSplit = sentence.split(" ");
  let longestWord = 0;
  for(i = 0; i < sentenceSplit.length; i++){
  if(sentenceSplit[i].length > longestWord){
    longestWord = sentenceSplit[i].length;
    }
  }
  return longestWord;
};

console.log(findLongestWord("wertgfd qoqoiqiqoqoqoppqpqpqpp"));

// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.
