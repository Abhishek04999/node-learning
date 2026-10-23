const fs = require("fs");
fs.writeFileSync("user.txt", "Name : Yash\nAge : 20\nCity : Pune");

const data = fs.readFileSync("user.txt", "utf-8");
console.log(data);

fs.appendFileSync("user.txt", "\nRole : Developer");

const data1 = fs.readFileSync("user.txt", "utf-8");
console.log(data1);

fs.unlinkSync("user.txt");

fs.writeFileSync("products.txt", "Laptop\nMobile\nKeyboard");

const data2 = fs.readFileSync("products.txt", "utf-8");
console.log(data2);

fs.appendFileSync("products.txt", "\nMouse");

const data3 = fs.readFileSync("products.txt", "utf-8");
console.log(data3);

fs.unlinkSync("products.txt");