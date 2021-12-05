const crypto = require('crypto');
const UserModel = require('./user.model');

const users = [];

const getAll = async () => {
  console.log("users1");

  return users;
};

const createUser = (data) => {
  console.log(data);
  const user = new UserModel();
  user.name = data.name;
  user.login = data.login;
  user.password = data.password;
  user.id = crypto.randomUUID();

  users.push(user);
  console.log(users);
  return { "id": user.id, "name": user.name, "login": user.login };
};
// TODO: mock implementation. should be replaced during task development
// 
;

module.exports = { getAll, createUser };
