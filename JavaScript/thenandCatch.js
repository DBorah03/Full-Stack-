function savetoDB(data) {
  return new Promise((resolve, reject) => {
    let intSpeed = Math.floor(Math.random() * 10) + 1;
    if (intSpeed > 5) {
      resolve("Success: Data was saved");
    } else {
      reject("Failure: Weak connection");
    }
  });
}
savetoDB("Hi Dhiraj")
  .then(() => {
    console.log("Promise was resolved");
  })
  .catch(() => {
    console.log("Promise was rejected");
  });
