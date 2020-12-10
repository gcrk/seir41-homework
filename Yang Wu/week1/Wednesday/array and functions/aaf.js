// # Array and Functions Bonus Material
//
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function (num1, num2) {
  if (num1 > num2) {
    console.log (num1);
  } else {
    console.log (num2);
  }
}

maxOfTwoNumbers(100,101);
maxOfTwoNumbers(28,50);
maxOfTwoNumbers(89,89);

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function (num1, num2, num3) {
  let max = "";

  if (num1 > num2) {
    max = num1;
  } else {
    max = num2;
  }

  if (max < num3) {
    max = num3;
  }

  console.log (max)
}

maxOfThree(123,86,97);
maxOfThree(53,53,82);
maxOfThree(72,72,72);


// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const vowelOrNot = function (str) {
  let vowelStr = "aeiou";
  let output = ""

  for (i = 0; i < vowelStr.length; i++){
    if (str === vowelStr[i]) {
      output = true;
    }
  }

  if (output.length === 0) {
    output = false;
  }
  console.log (output);
}

vowelOrNot("e")
vowelOrNot("y")
vowelOrNot("i")
vowelOrNot("b")


// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

const sumArray = function (array) {
  let sum = 0;
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log (sum)
}

const multiplyArray = function (array) {
  let multiplies = 1;
  for (i = 0; i < array.length; i++) {
    multiplies = multiplies*array[i];
  }
  console.log (multiplies)
}


sumArray([1,2,3,4]);
multiplyArray([1,2,3,4]);


// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function (str) {
  let newStr = "";
  for (i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  console.log (newStr)
}

reverseString ("jag testar");

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.

const findLongestWord = function (array) {
  let long = array[0].length;
  let num = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i].length > long) {
      long = array[i].length;
      num = i;
    }
  }
  console.log (array[num]);
}

findLongestWord (["apple","character","wordguesser"])
findLongestWord (["mean","name","finder"]);

// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.

const filterLongWords = function (array, i) {
  let result = [];
  for (j = 0; j < array.length; j++) {
    if (array[j].length > i) {
      result.push (array[j]);
    }
  }
  console.log (result);
}

filterLongWords (["winter","spring","fall"],5)
filterLongWords (["water","river","lake","cloud"],4)
