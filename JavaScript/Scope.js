let greet = "hello"; // Global Scope

function outerGreet() {
  let greet = "namaste"; // Function Scope
  console.log(greet);
  function innerGreet() {
    console.log(greet); // Lexical Scope
  }
  innerGreet();
}

console.log(greet);
outerGreet();
