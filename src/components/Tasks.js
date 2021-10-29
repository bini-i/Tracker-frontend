import { Stack } from '@mui/material';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link, useHistory } from 'react-router-dom';
import * as styles from '../styles/Tasks.module.css';
import { mapStateToProps } from '../reducers';
// eslint-disable-next-line import/no-cycle

const Tasks = ({ tasks, signedIn }) => {
  const history = useHistory();

  if (!signedIn) {
    history.push('/login');
  }

  const renderTaskItem = (task) => (
    <Card key={task.id} className={styles.taskCard}>
      <Box sx={{
        position: 'relative',
        display: 'inline-flex',
        justifyContent: 'center',
      }}
      >
        <CircularProgress variant="determinate" value={task.progress} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="caption" component="div" color="text.secondary">
            {`${Math.round(task.progress)}%`}
          </Typography>
        </Box>
      </Box>
      <div className={styles.cardTextContainer}>
        <Link to={{
          pathname: '/task',
          state: {
            id: task.id,
            taskNameState: task.task_name,
            descriptionState: task.description,
            progressState: task.progress,
            todosState: task.todos,
          },
        }}
        >
          <CardHeader
            className={styles.cardHeader}
            title={task.task_name}
          />
        </Link>
        <Typography
          variant="body2"
          color="text.secondary"
          className={styles.cardBody}
        >
          {task.description}
        </Typography>
      </div>
      <IconButton aria-label="settings" className={styles.moreIcon}>
        <MoreVertIcon />
      </IconButton>
    </Card>
  );
  const renderTasks = tasks.map(
    (task) => renderTaskItem(task),
  );
  return (
    <>
      <Stack className={styles.tasksContainer} direction="column" spacing={2}>
        {renderTasks}
      </Stack>
    </>
  );
};

export default connect(mapStateToProps, null)(Tasks);

Tasks.propTypes = {
  tasks: PropTypes.instanceOf(Array).isRequired,
  signedIn: PropTypes.bool.isRequired,
};
