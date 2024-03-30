let para = document.querySelector("p");
let box = document.querySelector("div");

para.addEventListener("click", function () {
  console.log("para was clicked");
});

box.addEventListener("mouseenter", function () {
  console.log("box was touched");
});
