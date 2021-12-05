const crypto = require('crypto');
const UserModel = require('./user.model');

const users = [];

const findUser = (id) => {
  for (let i = 0; i < users.length; i += 1) {
    if (users[i].id === id)
      return users[i];
  }
  return false;
}

const getAll = async () => users;

const getUser = async (id) => {
  const user = findUser(id);

  return user;
};


const createUser = (data) => {
  const user = new UserModel();
  user.name = data.name;
  user.login = data.login;
  user.password = data.password;
  user.id = crypto.randomUUID();

  users.push(user);
  return { "id": user.id, "name": user.name, "login": user.login };
};
// TODO: mock implementation. should be replaced during task development
// 

const updateUser = (id, data) => {
  const user = findUser(id);
  user.name = data.name;
  user.login = data.login;
  user.password = data.password;

  return user;
};

module.exports = { getAll, getUser, createUser, updateUser };
