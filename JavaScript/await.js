h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      console.log(`color changed to ${color}`);
      resolve("color changed");
    }, delay);
  });
}

async function demo() {
  await changeColor("red", 3000);
  await changeColor("green", 3000);
  await changeColor("blue", 3000);
  changeColor("yellow", 3000);
}
demo();
