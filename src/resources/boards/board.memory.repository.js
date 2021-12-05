const crypto = require('crypto');
const BoardModel = require('./board.model');

const boards = [];

const findBoard = (id) => {
  for (let i = 0; i < boards.length; i += 1) {
    if (boards[i].id === id)
      return boards[i];
  }
  return false;
}

const deleteBoardById = (id) => {
  let index = -1;
  for (let i = 0; i < boards.length; i += 1) {
    if (boards[i].id === id)
      index = i;
  }
  boards.splice(index, 1);
}

const getAll = async () => boards;

const getBoard = async (id) => {
  const board = findBoard(id);

  return board;
};

const createBoard = (data) => {
  const board = new BoardModel();
  board.id = crypto.randomUUID();
  board.title = data.title;
  board.columns = data.columns;
  boards.push(board);
  return board;
};
// TODO: mock implementation. should be replaced during task development
// 

const updateBoard = (id, data) => {
  const board = findBoard(id);
  board.title = data.title;
  board.columns = data.columns;

  return board;
};

const deleteBoard = (id) => {
  deleteBoardById(id);
};

module.exports = { getAll, getBoard, createBoard, updateBoard, deleteBoard };
