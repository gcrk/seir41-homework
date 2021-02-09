# Big-O Notation Exercises

What is the worst-case time complexity for the following algorithms?

## Question 1

function wordOccurrence(word, phrase){
  let result = 0
  const array  = phrase.split(' ')
  for(let i = 0; i < array.length; i++){
    if(word.toLowerCase() === array[i].toLowerCase()){
      result++;
    }
  }
  return result
}

**Answer:** O(N) or Linear Complexity


## Question 2

function bubble_sort(list){
  for(let i = 0; i < list.length - 1; i++){
    for(let j  = 0; j < list.length - 2; j++){
      if(list[j+1] < list[j]){
        const temp = list[j];
        list[j] = list[j+1];
        list[j+1] = temp;
      }
    }
  }
  return list;
}

**Answer:** O(N^2) or Quadratic Complexity


## Question 3

function factorial(n){
  if(n === 0){
    return 1;
  }else{
    return n * factorial(n-1);
  }
}

**Answer:** O(N) or Linear Complexity



## Question 4

function bobIsFirst(people){
  return people[0] == 'bob'
}

**Answer:** O(1) or Constant Complexity


## Question 5

function isPalindrome(input){
  const stack = [];
  let output = "";
  for(let i = 0; i < input.length; i++){
    stack.push(input[i]);
  }
  while(stack.length){
    output += stack.pop();
  }
  return output == input
}

**Answer:** O(N) or Linear Complexity


## Question 6

function sumOfDivisors(n){
  let result = 0;
  let i = 1;
  while(i < n){
    if( n % i == 0){
      result += i;
    }
     i++; Added to fix the infinite loop
  }
  return result
}

**Answer:** O(N) or Linear Complexity (technically it has Infinite Complexity, since the function is an infinite loop without the fix)


## Question 7

function printAllNumbersThenSumPairs(numArray){
  numArray.forEach((num)=>{
    console.log(num);
  });
  numArray.forEach((num, index)=>{
    if(index < numArray.length - 1){
      console.log(num + numArray[index+1])
    }
  });
}

**Answer:** O(N) or Linear Complexity


## Question 8

function isPrime(num){
  if(num == 1 || num == 2){
    return false
  }
  for(let i = 2; i < num - 1; i++){
    if(num % i == 0){
      return false
    }
  }
  return true
}

**Answer:** O(N) or Linear Complexity
