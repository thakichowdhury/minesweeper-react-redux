import { connect } from 'react-redux';
import {
  toggleFlag,
  checkCell,
  changeGameStatus,
  gameStatus,
  stopTimer,
} from '../../../redux/actions';
import { checkForWin, checkForLose } from '../../../helpers/game';
import Cell from '../../presentational/Cell/Cell';

const mapStateToProps = (state, ownProps) => ({
  cell: ownProps.cell,
  adjacentMines: ownProps.cell.adjacentMines,
});

const mapStateToDispatch = (dispatch, ownProps) => ({
  clickHandler: () => {
    dispatch(checkCell(ownProps.cell.coordinates, ownProps.cell.hasMine));
    if (checkForWin(ownProps.board)) {
      dispatch(changeGameStatus(gameStatus.WIN));
      stopTimer();
    }
    if (checkForLose(ownProps.cell) === '💣') {
      dispatch(changeGameStatus(gameStatus.LOSE));
      stopTimer();
    }
  },
  flagHandler: () => dispatch(toggleFlag(ownProps.cell.coordinates)),
});

const VisibleCell = connect(
  mapStateToProps,
  mapStateToDispatch,
)(Cell);

export default VisibleCell;
