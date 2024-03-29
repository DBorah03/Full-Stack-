// To check all numbers in the array are multiples of 10 or not

let num = [10, 20, 30, 40, 50, 60];

let ans = num.every((el) => {
  return el % 10 == 0;
});
console.log(ans);

//Creating a function to find the min number in an array

let nums = [2, 444, 45, 44, 53, 8, 5, 3];

let min = nums.reduce((res, el) => {
  if (el < res) {
    return el;
  } else {
    return res;
  }
});

console.log(min);
