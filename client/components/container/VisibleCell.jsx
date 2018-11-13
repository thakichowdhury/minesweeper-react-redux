import { connect } from 'react-redux';

import Cell from '../presentational/Cell';

import { toggleFlag, checkCell } from '../../redux/actions';

export type CellType = {
  coordinates: {row: number, col: number},
  hasMine: boolean,
  visited: boolean,
  flagged: boolean,
  adjacentMines: number,
};

const mapStateToProps = (state, ownProps) => ({
  coordinates: ownProps.cell.coordinates,
  clicked: ownProps.cell.clicked,
  hasMine: ownProps.cell.hasMine,
  visited: ownProps.cell.visited,
  flagged: ownProps.cell.flagged,
  adjacentMines: ownProps.cell.adjacentMines,
});

// dispatch an action that changes the cell visited property to true
// dispatch an action that changes the cell flagged property to true
const mapStateToDispatch = (dispatch, ownProps) => ({
  clickHandler: () => dispatch(checkCell(ownProps.cell.coordinates)),
  flagHandler: () => dispatch(toggleFlag(ownProps.cell.coordinates)),
});

const VisibleCell = connect(
  mapStateToProps,
  mapStateToDispatch,
)(Cell);

export default VisibleCell;
