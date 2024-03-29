let arr = [1, 3, 5, 6];

let double = arr.map((el) => {
  return el * 2;
});
console.log(double);

// another example

let stu = [
  {
    name: "Dhiraj",
    marks: 79,
  },
  {
    name: "Muluto",
    marks: 89,
  },
  {
    name: "Kingshu",
    marks: 87,
  },
];

let gpa = stu.map((el) => {
  return el.marks / 10;
});
console.log(gpa);
