const name = process.argv[2];
const age = process.argv[3];
const profession = process.argv[4];
console.log("Name : " + name);
console.log("Age : " + age);
console.log("Profession : " + profession);

/* What is Node.js?
Its runtime environment of JS which allowed the js to run outside the browser
Is Node.js a programming language, framework, or runtime?
It's runtime environment
What JavaScript engine does Node.js use?
Its use V8 engine
What is the difference between running JavaScript in a browser and running it with Node.js?
JS mostly intreact with Dom manipulation but node js can work as backend for filesystem, api etc
What does this command mean?
node app.js its run command for node to run js file outside the browser in editor terminal or cli
What is: process.argv
it help to access the argument in array which is passed from command line during execute the command node abc.js abc
Why do we need to convert command-line numbers before doing mathematical operations?
because if we don't convert them then during addition or subtraction its concate or return Nan and command line number default come in string format but we need int fload value to perform mathematical operations
 */