const fs = require("fs");
try {
    const data = fs.readFileSync("missing.txt", "utf-8");
    console.log(data);
} catch (error) {
    console.log("File not found");
}