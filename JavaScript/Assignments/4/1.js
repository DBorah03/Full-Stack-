let arr = [6, 8, 2, 1, 4, 3, 7, 9, 8, 2];

let num = 8;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === num) {
    arr.splice(i, 1);
  }
}
console.log(arr);
