const users = [
  {
    id: 1,
    name: "Yash",
    age: 20,
    city: "Pune",
    active: true,
  },
  {
    id: 2,
    name: "Rahul",
    age: 25,
    city: "Kota",
    active: false,
  },
  {
    id: 3,
    name: "Amit",
    age: 30,
    city: "Delhi",
    active: true,
  },
  {
    id: 4,
    name: "Priya",
    age: 22,
    city: "Jaipur",
    active: true,
  },
];

function getUserNames() {
  const names = users.map((user) => user.name);
  return names;
}
function getActiveUsers() {
  const activeUsers = users.filter((user) => user.active);
  return activeUsers.map((auser) => auser.name);
}
function findByUserId(id) {
  const userById = users.find((user) => user.id === id);
  return userById.name;
}
function getUsersAboveAge(age) {
  const userAbAge = users.filter((user) => user.age > age);
  return userAbAge.map((auser) => auser.name);
}
function getTotalAge() {
  const totalAge = users.reduce((sum, number) => sum + number.age, 0);
  return totalAge;
}
console.log(getUserNames());
console.log(getActiveUsers());
console.log(findByUserId(3));
console.log(getUsersAboveAge(22));
console.log(getTotalAge());
