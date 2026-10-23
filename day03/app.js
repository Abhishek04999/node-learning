const math = require("./math");
const { getUsers, getActiveUsers, findByUserId } = require("./users");
console.log(math.add(20, 5));
console.log(math.subtract(20, 5));
console.log(math.multiply(20, 5));
console.log(math.divide(20, 5));

console.log(getUsers());
console.log(getActiveUsers());
console.log(findByUserId(2));
console.log(findByUserId(99));

/*
 Ans : 1 A seperate Javascript file that consist of functions is called module. A module is a collection of related functions, variables, or other code that can be used in different parts of an application.
        A module can be imported into another file using the require() function or import statement in ES6.
 Ans : 2 module.exports is an object that allows you to export multiple values from a module.
        When you use module.exports, you can export multiple values from a module at once.
 Ans : 3 When we write require("./math") we are importing the math module from the math.js file.
 Ans : 4 Difference between module.exports = {
                                                add,
                                                subtract
                                            };  and module.exports = add; is that the first one exports multiple functions, while the second one exports a single function called add.
                                            
 Ans : 5 we use ./math for our local file instead of math because we tell node.js to look relative to the current directory. Here ./math is a relative path to the current directory. and ./ means current directory

 Ans 6 : CommonJS is a JavaScript module system that allows you to import and export modules.
         Node.js uses CommonJS as its module system.
 Ans 7 : Difference between CommonJS and ES6 modules is that CommonJS modules are used in older versions of Node.js, while ES6 modules are used in newer versions of Node.js. 
 
 Ans 8 : __dirname provide information about the current directory
 Ans 9 : __filename provide information about the current file
 Ans 10 : if math.js contains module.exports = {
    add,
    subtract,
    multiply
};  yes we write const { add, multiply } = require("./math"); because we want to import only add, subtract, multiply from math.js file and not entire math.js file.

 */