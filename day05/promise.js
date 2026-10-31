const success = new Promise((resolve, reject) => {
  resolve("Task Completed");
});

const failure = new Promise((resolve, reject) => {
  reject("Task Failed");
});

success.then((result) => console.log(result));
failure.catch((error) => console.log(error));

const task = new Promise((resolve, reject) => {
  resolve(10);
});
task.then((number) => {
   return number * 2;
}).then((number) => {
  return number + 5;
}).then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});


const task2 = new Promise((resolve, reject) => {
  reject("Invalid user");
});
task2.then((result) => {
  console.log("Step 1:", result);
}).then((result) => {
  console.log("Step 2:", result);
}).catch((error) => {
  console.log("Error:", error);
})

const task3 = new Promise((resolve, reject) => {
  reject("Something went wrong");
});

task3
  .then((result) => {
    console.log("Step 1:", result);
    return result;
  })
  .catch((error) => {
    console.log("Error:", error);
    return "Recovered";
  })
  .then((result) => {
    console.log("Step 2:", result);
  });