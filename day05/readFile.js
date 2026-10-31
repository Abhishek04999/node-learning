const fs = require("fs/promises");
fs.readFile("user.txt", "utf-8", (error, data) => {
    if (error) {
        console.log("File could not be read");
        return;
    }
    console.log(data);
}) 

fs.readFile("message.txt", "utf-8").then((data) => {
    console.log(data);
}).catch((error) => {
    console.log("Error:", error.message);
});