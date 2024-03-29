let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr1 = [2, 4, 6, 8];

let ans1 = arr.some((el) => {
  return el % 2 == 0;
});
console.log(ans1);

let ans2 = arr1.some((el) => {
  return el % 2 != 0;
});
console.log(ans2);
