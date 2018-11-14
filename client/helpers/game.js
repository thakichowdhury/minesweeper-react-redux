import store from '../redux/store';
import { changeGameStatus, gameStatus } from '../redux/actions';

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
  console.log('row', row, '\n', 'col', col, '\n', 'cell', cell, '\n', 'board', board);

  if (!cell || cell.visited) {
    return;
  }

  const payload = {
    board,
    row,
    col,
    cell,
  };

  const numberOfMines = checkAdjacent(payload);

  cell.visited = true;

  if (!cell.adjacentMines) {
    checkAdjacent(payload, checkBoard);
  }
};

const setClick = (row, col, board) => {
  board[row][col].clicked = true;
};

const revealBoard = (board) => {
  board.forEach((row) => {
    row.forEach((col) => {
      col.visited = true;
      col.clicked = true;
    });
  });
};

const minesByDimension = {
  8: 10,
  16: 40,
  24: 99,
};

export const combineChecks = (row, col, board, hasMine = false) => {
  setClick(row, col, board);
  checkBoard(row, col, board);
  if (hasMine) {
    revealBoard(board);
  }
};

export const statusImages = {
  PLAYING: 'http://pimg.p30download.com/APK_IMG/p/com.PaleBlueDot.MinesweeperClassic/icon/icon_4_small.png',
  WIN: 'https://anymeetingblog.files.wordpress.com/2011/10/charlie-sheen-winning.png',
  LOSE: 'https://png2.kisspng.com/20180314/fbq/kisspng-smiley-emoticon-death-clip-art-dead-face-cliparts-5aa910fa0573e9.1125826415210293700223.png',
};

export const checkForWin = (board) => {
  const dimensions = board.length;
  const totalSize = dimensions ** 2;
  const totalMines = minesByDimension[dimensions];

  const nonMineCells = totalSize - totalMines;
  const cellsVisited = board.reduce((accum, row) => accum + row.filter(cell => cell.visited).length, 0);
  return nonMineCells === cellsVisited;
};

export const checkForLose = (visited, adjacentMines, hasMine, flagged, clicked) => {
  const { LOSE } = gameStatus;
  const mine = '💣';
  const flag = '🚩';

  if (visited && adjacentMines > 0 && !hasMine) {
    return adjacentMines;
  }
  if (flagged) {
    return flag;
  }
  if (clicked && hasMine) {
    store.dispatch(changeGameStatus(LOSE));
    return mine;
  }
};
