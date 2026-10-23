const input1 = process.argv[2];
const input2 = process.argv[3];
const operation = process.argv[4];
if (
  operation === undefined ||
  input1 === undefined ||
  input2 === undefined
) {
  console.log("Usage: node calculator2.js <number1> <number2> <operation>");
  process.exit(1);
}
const input3 = Number(input1);
const input4 = Number(input2);
if (operation === "add") {
  console.log("Result " + (input3 + input4));
} else if (operation === "subtract") {
  console.log("Result " + (input3 - input4));
} else if (operation === "multiply") {
  console.log("Result " + input3 * input4);
} else if (operation === "divide") {
  if (input4 === 0) {
    console.log("Can not be divide by zero");
  } else {
    console.log("Result " + input3 / input4);
  }
} else {
  console.log("Invalid Operation");
}
