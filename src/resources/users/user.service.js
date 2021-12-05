const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const createUser = (data) => usersRepo.createUser(data);

module.exports = { getAll, createUser };
