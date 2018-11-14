// @flow

import { connect } from 'react-redux';
import { gameStatus } from '../../../redux/actions';
import Message from '../../presentational/Message/Message';

const { PLAYING, WIN, LOSE } = gameStatus;

const parseMessage = (state) => {
  const { status } = state;
  if (state.status === PLAYING) {
    return 'Minesweeper';
  }
  if (state.status === LOSE) {
    return 'GAME OVER!';
  }
  if (state.status === WIN) {
    return 'YOU WON!';
  }
  return state;
};

const mapStateToProps = (state, ownProps) => ({
  message: parseMessage(state),
  status: state.status,
});

const VisibleBoard = connect(
  mapStateToProps,
)(Message);

export default VisibleBoard;
