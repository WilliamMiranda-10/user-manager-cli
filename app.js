let users = [];
let id = 1;

function addUser(id, name, email, password) {
  const user = {
    id: id + 1,
    name: name,
    email: email,
    password: password,
  };
  users.push(user);
}


console.log(users);

// listUsers
function listUsers(users) {
  users.forEach((user) => {
    console.log(`${user.id}- ${user.name} ${user.email}`);
  });
}

listUsers(users);

// findUser

function findUser(id, data) {
  const user = data.find((user) => user.id === id);
  console.log("Olá", user.name);
}
findUser(4, users);

// removeUser

function removeUser(id, data) {
  const users = data.filter(user =>user.id !== id)
  console.log(users);
}

removeUser(2, users);
// updateUser
