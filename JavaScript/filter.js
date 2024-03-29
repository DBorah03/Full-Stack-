let arr = [1, 4, 8, 12, 3, 5, 7, 9];

// To filter even numbers

let even = arr.filter((el) => {
  return el % 2 == 0;
});
console.log(even);

// To filter odd  numbers

let odd = arr.filter((el) => {
  return el % 2 != 0;
});
console.log(odd);
