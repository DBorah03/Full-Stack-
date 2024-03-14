//function to disaplay name and age

function info(name, age) {
  console.log(`${name}'s age is ${age}`);
}
info("Dhiraj", 25);
info("Sumit", 26);

//function to print the average of three numbers

function average(a, b, c) {
  console.log((a + b + c) / 3);
}
average(3, 6, 12);
average(66, 88, 90);

//function that prints the multiplication table of a number

function table(a) {
  for (let i = a; i <= a * 10; i += a) {
    console.log(i);
  }
}
table(3);
table(9);
table(15);
