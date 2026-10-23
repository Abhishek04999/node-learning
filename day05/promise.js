const success = new Promise((resolve, reject) => {
  resolve("Task Completed");
});

const failure = new Promise((resolve, reject) => {
  reject("Task Failed");
});

success.then((result) => console.log(result));
failure.catch((error) => console.log(error));
