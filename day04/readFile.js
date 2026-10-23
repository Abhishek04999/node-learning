const fs = require("fs");
try {
    const data = fs.readFileSync("data.txt", "utf-8");
    console.log("File content : ", data);
    
} catch(error){
    if(error.code == "ENOENT"){
        console.log('File not found');
        
    }
}
const data = fs.readFileSync("user.txt", "utf-8");
const updatedData = data.replace("Age : 20", "Age : 21").replace("City : Pune", "City : Kota");

fs.writeFileSync("user.txt", updatedData);

const data1 = fs.readFileSync("user.txt", "utf-8");
console.log(data1);
fs.unlinkSync("user.txt");