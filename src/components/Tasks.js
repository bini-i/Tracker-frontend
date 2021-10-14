import Stack from '@mui/material/Stack';
import Item from '@mui/material/Item';

const Tasks = () => (
  <>
    <h2>Tasks</h2>

    <Stack direction="row" spacing={2}>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </Stack>
  </>
);

export default Tasks;
