const max = prompt("Enter the maximum number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number");

while (true) {
  if (guess == "quit") {
    console.log("You quit");
    break;
  }
  if (guess == random) {
    console.log("You are right! Congrats!! The random number is:", random);
    break;
  } else if (guess < random) {
    guess = prompt("Hint: You guessed a little lower, try again");
  } else {
    guess = prompt("Hint: You guessed a little higher, try again");
  }
}
