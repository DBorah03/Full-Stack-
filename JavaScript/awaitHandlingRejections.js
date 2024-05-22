h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 6) + 1;
      if (num > 3) {
        reject("Promise was rejected");
      }
      h1.style.color = color;
      console.log(`color changed to ${color}`);
      resolve();
    }, delay);
  });
}

async function demo() {
  try {
    await changeColor("red", 3000);
    await changeColor("green", 3000);
    await changeColor("blue", 3000);
    changeColor("yellow", 3000);
  } catch (error) {
    console.log("error caught");
    console.log(error);
  }

  let a = 5;
  let b = 6;
  console.log(`a = ${a}`);
  console.log(`b = ${b}`);
  console.log(`a + b = ${a + b}`);
}

demo();
