let id = setInterval(() => {
  console.log("Hello, Dhiraj!");
}, 3000);

setTimeout(() => {
  clearInterval(id);
  console.log("Successfully ran 6 times then stopped.");
}, 18000);
