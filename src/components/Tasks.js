import { Stack } from '@mui/material';
import Task from './Task';

const Tasks = () => (
  <>
    <h2>Tasks</h2>

    <Stack direction="row" spacing={2}>
      <Task key={1} taskName="task1" />
      <Task key={2} taskName="task2" />
      <Task key={3} taskName="task3" />
    </Stack>
  </>
);

export default Tasks;
