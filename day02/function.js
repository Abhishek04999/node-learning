// EXERCISE 3
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
console.log(add(10, 5));
console.log(subtract(10, 5));
console.log(multiply(10, 5));
console.log(divide(10, 5));

// EXERCISE 4
/* 
 when test() is calling both console log will be executed or show value (They work because one is globale scope and other is local scope)
 second also work perfect (its work because its calling globale scope)
 but third give error because its scope limit to the function so directly not access outside of function
 */