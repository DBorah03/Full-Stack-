let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

btn.addEventListener("click", colorText);

h1.addEventListener("click", colorText);

h3.addEventListener("click", colorText);

function colorText() {
  console.log(this.innerText);
  this.style.backgroundColor = "aqua";
}
