let inp = document.querySelector("input");

inp.addEventListener("keydown", (event) => {
  console.log(`code: ${event.code}`);
  if (event.code == "ArrowUp") {
    console.log("Move forward");
  } else if (event.code == "ArrowDown") {
    console.log("Move down");
  } else if (event.code == "ArrowLeft") {
    console.log("Move left");
  } else if (event.code == "ArrowRight") {
    console.log("Move right");
  }
});
