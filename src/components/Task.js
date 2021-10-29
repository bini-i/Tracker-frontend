import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as styles from '../styles/NewTaskForm.module.css';
import updateTaskAPI from '../helpers/api/updateTaskAPI';
import { mapDispatchToProps } from '../reducers';

const Task = ({ updateTask }) => {
  const location = useLocation();
  const {
    id,
    taskNameState,
    descriptionState,
    todosState,
  } = location.state;

  let newProgressState = 0;
  const incrementProgressState = () => {
    newProgressState += 1;
  };
  todosState.forEach((todo) => {
    // eslint-disable-next-line no-unused-expressions
    todo.checked ? incrementProgressState() : null;
  });

  const [taskName, setTaskName] = useState(taskNameState);
  const [description, setDescription] = useState(descriptionState);
  const [todoRowAmount, settodoRowAmount] = useState(todosState.length);
  const [todos] = useState(todosState);
  const [progress, setProgress] = useState(newProgressState);
  const history = useHistory();

  const handleChange = (event) => {
    if (event.target.name === 'taskName') {
      setTaskName(event.target.value);
    } else if (event.target.name === 'description') {
      setDescription(event.target.value);
    } else if (event.currentTarget.name === 'addRow') {
      settodoRowAmount(todoRowAmount + 1);
      todos.push({ checked: false });
    } else if (event.currentTarget.name === 'deleteRow') {
      const indx = parseInt(event.currentTarget.id, 10);
      todos.splice(indx, 1);
      settodoRowAmount(todoRowAmount - 1);
    } else if (event.currentTarget.attributes.name.nodeValue === 'todo') {
      if (event.target.type === 'text') {
        todos[parseInt(event.target.id, 10)].value = event.target.value;
      } else if (event.target.type === 'checkbox') {
        todos[parseInt(event.target.id, 10)].checked = event.target.checked;
        if (event.target.checked) {
          setProgress(progress + 1);
        } else {
          setProgress(progress - 1);
        }
      }
    }
  };

  const TodoRow = () => (
    Array.from({ length: todoRowAmount }, (ele, indx) => (
      <div key={(indx + 1).toString()} className={styles.todo}>
        <Checkbox id={(indx).toString()} className={styles.checkBox} color="default" checked={todos[indx].checked} />
        <input id={(indx).toString()} className={styles.todoInput} placeholder="todo" type="text" defaultValue={todos[indx].value} />
        <IconButton id={(indx).toString()} className={styles.todoDeleteIcon} onClick={handleChange} name="deleteRow">
          <ClearIcon fontSize="small" />
        </IconButton>
      </div>
    ))
  );

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await updateTaskAPI({
      id, taskName, description, progress: ((progress / todos.length) * 100), todos,
    });
    if (response.status === 200) {
      updateTask({
        id,
        task_name: taskName,
        description,
        progress: ((progress / todos.length) * 100),
        todos,
      });
      history.push('/tasks');
    }
  };
  return (
    <>
      <div className={styles.newTaskFormContainer}>
        <form onSubmit={handleSubmit}>
          <TextField className={styles.newTaskInput} onChange={handleChange} name="taskName" label="Task Name" variant="standard" value={taskName} />
          <TextField
            className={styles.newTaskInput}
            onChange={handleChange}
            name="description"
            label="Description"
            multiline
            rows={3}
            value={description}
            variant="standard"
          />
          <Divider className={styles.divider} textAlign="left">Todos</Divider>

          <div onChange={handleChange} className={styles.todoContainer} name="todo">
            <TodoRow />
          </div>

          <IconButton className={styles.todoAddIcon} onClick={handleChange} name="addRow">
            <AddIcon />
          </IconButton>
          <Button className={styles.submitBtn} type="submit" variant="contained" color="success">
            Update Task
          </Button>
        </form>
      </div>
    </>
  );
};

export default connect(null, mapDispatchToProps)(Task);

Task.propTypes = {
  updateTask: PropTypes.func.isRequired,
};
