const users = [
    {
        id: 1,
        name: "Yash",
        age: 20,
        active: true
    },
    {
        id: 2,
        name: "Rahul",
        age: 25,
        active: false
    },
    {
        id: 3,
        name: "Amit",
        age: 30,
        active: true
    }
];
function getUsers() {
    return users;
}

 function getActiveUsers() {
    const activeUsers = users.filter((user) => user.active);
    return activeUsers.map((auser) => auser.name);
}
 
function findByUserId(id) {
    const userById = users.find((user) => user.id === id);
    if (userById) {
        return userById.name;
    }
    return "User not found";
}

module.exports = {getUsers, getActiveUsers, findByUserId};

