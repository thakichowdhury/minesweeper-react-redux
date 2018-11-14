import { connect } from 'react-redux';
import Cell from '../../presentational/Cell/Cell';
import {
  toggleFlag,
  checkCell,
  changeGameStatus,
  gameStatus,
} from '../../../redux/actions';
import { checkForWin } from '../../../helpers/game';

const mapStateToProps = (state, ownProps) => ({
  coordinates: ownProps.cell.coordinates,
  clicked: ownProps.cell.clicked,
  hasMine: ownProps.cell.hasMine,
  visited: ownProps.cell.visited,
  flagged: ownProps.cell.flagged,
  adjacentMines: ownProps.cell.adjacentMines,
});

const mapStateToDispatch = (dispatch, ownProps) => ({
  clickHandler: () => {
    dispatch(checkCell(ownProps.cell.coordinates, ownProps.cell.hasMine));
    if (checkForWin(ownProps.board)) {
      dispatch(changeGameStatus(gameStatus.WIN));
    }
  },
  flagHandler: () => dispatch(toggleFlag(ownProps.cell.coordinates)),
});

const VisibleCell = connect(
  mapStateToProps,
  mapStateToDispatch,
)(Cell);

export default VisibleCell;
