let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
});

let inp = document.querySelector("input");

inp.addEventListener("input", function () {
  console.log("input changed");
  console.log(`final value: ${inp.value}`);
});
