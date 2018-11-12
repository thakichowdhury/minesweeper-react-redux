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


const checkBoard = (row, col, board) => {
  const rowExists = row >= 0 && row <= board.length;
  const colExists = col >= 0 && col <= board.length;

  if (!rowExists || !colExists) {
    return;
  }

  const cell = board[row][col];

  if (cell.visited) {
    return;
  }

  const payload = {
    board,
    row,
    col,
    cell,
  };


  if (cell.visited) {
    return;
  }

  const numberOfMines = checkAdjacent(payload);

  cell.visited = true;

  if (!cell.adjacentMines) {
    checkAdjacent(payload, checkBoard);
  }
};

export default checkBoard;
