const abc = process.argv[2];
if(abc == undefined || abc == ""){
    console.log("Error: No argument provided");
} else {
    console.log("Hello " + abc + "!");
    console.log("Welcome to Node.js.");
    console.log("Let's start learning backend development.");   
}