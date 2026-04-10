let users = [];
let id = 1;

function addUser(name, email, password) {
  const user = {
    id: id++,
    name,
    email,
    password,
  };
  //adiciona um novo usuário á lista em memoria
  users.push(user);
}

function listUsers() {
  users.forEach((user) => {
    console.log(`${user.id}- ${user.name} -  ${user.email}`); //lista todos os usuários
  });
}

function findUser(name) {
  return users.filter(
    (user) => user.name.toLowerCase().includes(name.toLowerCase())
    // Busca usuários pelo nome (case insensitive e com correspondência parcial)
  );
}

function removeUser(id) {
  users = users.filter((user) => user.id !== id);
  // Remove usuário pelo id
}

function updateUser(id, name, email, password) {
  const user = users.find((user) => user.id === id); //identifica o usuario com id e atualiza.
  if (user) {
    user.name = name;
    user.email = email;
    user.password = password;
  }
}
