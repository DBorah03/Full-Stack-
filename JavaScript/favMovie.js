const favMov = "Thor";
let guess = prompt("Guess my favourite movie");

while (guess != favMov && guess != "quit") {
  guess = prompt("Wrong guess! Please try again");
}
if (guess === favMov) {
  console.log("Congrats!");
} else {
  console.log("You quit");
}
