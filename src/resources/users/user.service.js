const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const getUser = (id) => usersRepo.getUser(id);
const createUser = (data) => usersRepo.createUser(data);
const updateUser = (id, data) => usersRepo.updateUser(id, data);
module.exports = { getAll, getUser, createUser, updateUser };
