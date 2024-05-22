async function greet() {
  return "Hi Dhiraj";
}
greet()
  .then((result) => {
    console.log("Promise was resolved");
    console.log("Result is:", result);
  })
  .catch((err) => {
    console.log("Promise was rejected with error:", err);
  });
