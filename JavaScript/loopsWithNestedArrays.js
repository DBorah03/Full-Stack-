let character = [
  ["Thor", "Iron Man", "Captain America"],
  ["Hulk", "Hawkeye", "Black Widow"],
];

for (i = 0; i < character.length; i++) {
  console.log(`Character from list ${i}`);
  for (j = 0; j < character[i].length; j++) {
    console.log(character[i][j]);
  }
}

//Another example

let students = [
  ["Dhiraj", 25],
  ["Muluto", 25],
  ["Sobebar", 25],
];

for (i = 0; i < students.length; i++) {
  console.log(`Info of student ${i + 1}`);
  for (j = 0; j < students[i].length; j++) {
    console.log(students[i][j]);
  }
}
