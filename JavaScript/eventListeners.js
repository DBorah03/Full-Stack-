let btns = document.querySelectorAll("button");

for (btn of btns) {
  btn.addEventListener("click", hello);
  btn.addEventListener("click", msg);
}

function hello() {
  alert("Hello");
}

function msg() {
  alert("Hi, Dhiraj");
}
