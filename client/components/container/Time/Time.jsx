import { connect } from 'react-redux';
import { gameStatus } from '../../../redux/actions';
import Seconds from '../../presentational/Seconds/Seconds';

const mapStateToProps = (state, ownProps) => ({
  isTicking: state.isTicking,
  seconds: state.time,
  status: state.status,
});

const Time = connect(
  mapStateToProps,
)(Seconds);

export default Time;
