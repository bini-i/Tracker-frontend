import PropTypes from 'prop-types';

const Task = ({ taskName }) => (
  <h3>{taskName}</h3>
);

export default Task;

Task.propTypes = {
  taskName: PropTypes.string.isRequired,
};
