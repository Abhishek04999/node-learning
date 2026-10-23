const fs = require("fs");
fs.readFile("user.txt", "utf-8", (error, data) => {
    if (error) {
        console.log("File could not be read");
        return;
    }
    console.log(data);
}) 