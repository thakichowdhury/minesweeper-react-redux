// @flow

import { connect } from 'react-redux';
import Board from '../../presentational/Board/Board';

const mapStateToProps = (state, ownProps) => ({
  board: state.board,
});

const VisibleBoard = connect(
  mapStateToProps,
)(Board);

export default VisibleBoard;
