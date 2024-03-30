let btns = document.querySelectorAll("button");

function click() {
  alert("Button was clicked");
}

function mouseenter() {
  console.log("You entered a button");
}

for (btn of btns) {
  btn.onclick = click;
  btn.onmouseenter = mouseenter;
}
