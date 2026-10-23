const users = [
    {
        id: 1,
        name: "Yash",
        age: 20,
        city: "Pune",
        active: true
    },
    {
        id: 2,
        name: "Rahul",
        age: 25,
        city: "Kota",
        active: false
    },
    {
        id: 3,
        name: "Amit",
        age: 30,
        city: "Delhi",
        active: true
    },
    {
        id: 4,
        name: "Priya",
        age: 22,
        city: "Jaipur",
        active: true
    }
];

const names = users.map((user) => user.name);
console.log(names);
const adults = users.filter((user) => user.age >= 21);
console.log(adults);
const user = users.find((user) => user.id === 3);
console.log(user);
const city = users.some((user) => user.city === "Kota");
console.log(city);
const active = users.every((user) => user.active);
console.log(active);
const totalAge = users.reduce((total , user) => total + user.age, 0);
console.log(totalAge);
const details = users.map((user) => {
    return {
        name: user.name,
        city: user.city
    };
})
console.log(details);

/*
Ans 1 :- map() creats a new array by transform an object
         filter() creates a new array containing only elements that satisfy conditions
         find() returns the first element that satisfy the condition
Ans 2 :- map() returns a array
Ans 3 :- filter() when nothing matches then return empty array
Ans 4 :- find() when nothing matches then return undefined
Ans 5 :- Difference between some() and every() is that some() returns true if any element in the array matches the condition, while every() returns true only if all elements in the array match the condition
Ans 6 :- reduce() do sum
Ans 7 :- Difference between user.name and user["name"] is that user.name is a property of the object, while user["name"] is a key of the object

Ans 8 :- Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables

 */
