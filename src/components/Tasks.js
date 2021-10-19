import { Stack } from '@mui/material';
import Task from './Task';
import * as styles from '../styles/Tasks.module.css';

const Tasks = () => (
  <>
    <Stack className={styles.tasksContainer} direction="column" spacing={2}>
      <Task key={1} taskName="task1" />
      <Task key={2} taskName="task2" />
      <Task key={3} taskName="task3" />
    </Stack>
  </>
);

export default Tasks;
