const fs = require("fs");
fs.writeFile("async.txt", "Hello from asynchronous Node.js", (error) => {
  if (error) {
    console.log("File could not be written");
    return;
  }
  console.log("File written successfully");
  fs.appendFile(
    "async.txt",
    "\nThis line was appended asynchronously",
    (error) => {
      if (error) {
        console.log("Content could not be appended");
        return;
      }
      console.log("Content appended successfully");
      fs.readFile("async.txt", "utf-8", (error, data) => {
        if (error) {
          console.log("File could not be read");
          return;
        }
        console.log(data);
        fs.unlink("async.txt", (error) => {
          if (error) {
            console.log("File could not be deleted");
            return;
          }
          console.log("File deleted successfully");
        });
      });
    },
  );
});
