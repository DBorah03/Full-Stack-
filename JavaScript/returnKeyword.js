//function to calculate sum using return

function sum(a, b) {
  return a + b;
}
console.log(sum(3, 6));

//function to check if the person is adult or not

function isAdult(age) {
  if (age >= 18) {
    return "Adult";
  } else {
    return "Not adult";
  }
}

console.log(isAdult(24));

//function that returns the sum of numbers from 1 to n

function getSum(n) {
  let sum = 0;
  for (i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(getSum(9));

//function that return the concatenation of all strings in an array

let str = ["Hi ", "Hello ", "Goodbye", "!"];

function concat(str) {
  let result = "";
  for (i = 0; i < str.length; i++) {
    result += str[i];
  }
  return result;
}

console.log(concat(str));
