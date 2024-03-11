const student = {
  name: "Dhiraj Borah",
  age: 25,
  sex: "Male",
  city: "Guwahati",
};

console.log(student);

student.name = "Raj";
student.age = 23;
student.height = "171 cm";
console.log(student);

delete student.age;
console.log(student);
