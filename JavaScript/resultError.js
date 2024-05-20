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
  .then((result) => {
    console.log("data1 saved");
    console.log("result of promise:", result);
    return savetoDB("Bye");
  })
  .then((result) => {
    console.log("data2 saved");
    console.log("result of promise:", result);
    return savetoDB("Shy");
  })
  .then((result) => {
    console.log("data3 saved");
    console.log("result of promise:", result);
  })
  .catch((error) => {
    console.log("Promise was rejected");
    console.log("error of promise:", error);
  });
