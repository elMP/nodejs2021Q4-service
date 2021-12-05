const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  // map Board fields to exclude secret fields like "password"
  res.json(boards.map(Board.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const board = await boardsService.getBoard(req.params.id);
  // map Board fields to exclude secret fields like "password"
  if (board)
    res.json(board);
  else
    res.status(404).end();
});

router.route('/').post((req, res) => {
  const board = boardsService.createBoard(req.body);
  // map Board fields to exclude secret fields like "password"
  res.status(201).json(board);
});

router.route('/:id').put(async (req, res) => {
  const board = await boardsService.updateBoard(req.params.id, req.body);
  // map Board fields to exclude secret fields like "password"
  res.json(board);
});

router.route('/:id').delete(async (req, res) => {
  await boardsService.deleteBoard(req.params.id);
  // map Board fields to exclude secret fields like "password"
  res.status(204).end();
});

module.exports = router;
