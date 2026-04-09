let users = [];
let id = 1;

function addUser(id, name, email, password) {
  const user = {
    id: id++,
    name,
    email,
    password,
  };
  users.push(user);
}

// listUsers;
function listUsers() {
  users.forEach((user) => {
    console.log(`${user.id}- ${user.name} ${user.email}`); //lista todos os usuários
  });
}

listUsers(users);

// findUser;
function findUser(name) {
  return users.filter((user) =>
    user.name.toLowerCase().includes(name.toLowerCase())
  ); //busca usuário com o nome!
}

//removerUser
function removeUser(id) {
  users.filter((user) => user.id !== id); //remove o usuário com id
}

// updateUser
function updateUser(data, id, name, email, password) {
  const user = data.find((user) => user.id === id); //identifica o usuario com id e atualiza.
  if (user) {
    user.name = name;
    user.email = email;
    user.password = password;
  }
}
