let arr = [2, 7, 8, 9, 10, 12, 4];
let print = function (el) {
  console.log(el);
};

arr.forEach(print);

// another example

let arr1 = [3, 9, 0, 8, 13, 22, 44];

arr1.forEach((el) => {
  console.log(el);
});

//another example

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

stu.forEach((s) => {
  console.log(s);
  console.log(s.name);
  console.log(s.marks);
});
