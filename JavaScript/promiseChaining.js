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

savetoDB("Hi")
  .then(() => {
    console.log("data1 saved");
    return savetoDB("Bye");
  })
  .then(() => {
    console.log("data2 saved");
    return savetoDB("Shy");
  })
  .then(() => {
    console.log("data3 saved");
  })
  .catch(() => {
    console.log("Promise was rejected");
  });
