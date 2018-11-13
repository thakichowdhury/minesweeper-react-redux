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
  return board;
};

export default makeBoard;
