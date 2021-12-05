const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.getUser(req.params.id);
  // map user fields to exclude secret fields like "password"
  if (user)
    res.json(user);
  else
    res.status(404).end();
});

router.route('/').post((req, res) => {
  const user = usersService.createUser(req.body);
  // map user fields to exclude secret fields like "password"
  res.status(201).json(user);
});

router.route('/:id').put(async (req, res) => {
  const user = await usersService.updateUser(req.params.id, req.body);
  // map user fields to exclude secret fields like "password"
  res.json(user);
});

router.route('/:id').delete(async (req, res) => {
  await usersService.deleteUser(req.params.id);
  // map user fields to exclude secret fields like "password"
  res.status(204).end();
});

module.exports = router;
