const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});



router.route('/').post((req, res) => {
  console.log(req.body)
  const user = usersService.createUser(req.body);
  // map user fields to exclude secret fields like "password"
  res.status(201).json(user);
});


module.exports = router;
