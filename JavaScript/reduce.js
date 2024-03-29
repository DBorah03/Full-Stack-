let arr = [1, 2, 3, 4];

let ans = arr.reduce((res, el) => {
  return res + el;
});

console.log(ans);

// Another example to find the maximum number

let num = [12, 45, 773, 24, 68, 454, 994, 334];

let max = num.reduce((res, el) => {
  if (el > res) {
    return el;
  } else {
    return res;
  }
});

console.log(max);
