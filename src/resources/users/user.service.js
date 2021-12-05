const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const getUser = (id) => usersRepo.getUser(id);
const createUser = (data) => usersRepo.createUser(data);

module.exports = { getAll, getUser, createUser };
