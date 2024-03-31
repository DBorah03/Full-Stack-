let inp = document.querySelector("input");

inp.addEventListener("keydown", function (event) {
  console.log("Key was pressed");
  console.log(`code: ${event.code}`);
  console.log(`key: ${event.key}`);
});

inp.addEventListener("keyup", function (event) {
  console.log("Key was pressed");
  console.log(`code: ${event.code}`);
  console.log(`key: ${event.key}`);
});
