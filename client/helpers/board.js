const identity = val => val;

const mines = (node) => {
  if (node) {
    return node.hasMine ? 1 : 0;
  }
  return 0;
};

function checkRow(
  board,
  row,
  col,
  cell,
  callback = identity,
) {
  // i: int /row/, int /col/
  // o: int /total number of mines for the cell and each horizontal side/
  const currentRow = board[row];

  if (currentRow) {
    for (let i = col - 1; i <= col + 1; i += 1) {
      callback(row, i, board);
      cell.adjacentMines += mines(currentRow[i]);
    }
  }
}

const checkAdjacent = ({ board, row, col }, callback) => {
  const cell = board[row][col];
  let yc = row - 1;
  for (let i = 0; i < 3; i += 1) {
    checkRow(board, yc, col, cell, callback);
    yc += 1;
  }
  return cell.adjacentMines;
};
//---redundancy---//

const makeCell = (row, col) => ({
  coordinates: { row, col },
  clicked: false,
  hasMine: false,
  visited: false,
  flagged: false,
  adjacentMines: 0,
});

const minesByDifficulty = {
  beginner: { dimensions: 8, mines: 10 },
  intermediate: { dimensions: 16, mines: 40 },
  expert: { dimensions: 24, mines: 99 },
};

const getRandomInt = (max, min) => Math.floor(Math.random() * (max - min)) + min;

const setMines = (mines, dimensions, board) => {
  let remainingMines = mines;
  while (remainingMines > 0) {
    const y = getRandomInt(dimensions, 0);
    const x = getRandomInt(dimensions, 0);
    const cell = board[y][x];

    if (!cell.hasMine) {
      cell.hasMine = true;
      remainingMines -= 1;
    }
  }
};

const setAdjacent = (board) => {
  board.forEach((row, y) => {
    row.forEach((col, x) => {
      checkAdjacent({ board, row: y, col: x });
    });
  });
};

const makeBoard = (difficulty = 'beginner') => {
  const { dimensions, mines } = minesByDifficulty[difficulty];

  const board = [];
  for (let row = 0; row < dimensions; row += 1) {
    board.push([]);
    for (let col = 0; col < dimensions; col += 1) {
      board[row].push(makeCell(row, col));
    }
  }
  setMines(mines, dimensions, board);
  setAdjacent(board);
  return board;
};

export default makeBoard;
