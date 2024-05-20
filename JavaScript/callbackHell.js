function savetoDB(data, success, failure) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;
  if (internetSpeed > 6) {
    success();
  } else {
    failure();
  }
}
savetoDB(
  "Hi Dhiraj",
  () => {
    console.log("Success: Data1 was saved");
    savetoDB(
      "Hi Dhiraj",
      () => {
        console.log("Success: Data2 was saved");
        savetoDB(
          "Hi Dhiraj",
          () => {
            console.log("Success: Data3 was saved");
          },
          () => {
            console.log("Failure: Data3 was not saved");
          }
        );
      },
      () => {
        console.log("Failure: Data2 was not saved");
      }
    );
  },
  () => {
    console.log("Failure: Data1 was not saved");
  }
);
