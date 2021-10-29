import { ADD_TASK, UPDATE_TASK, RESET_TASK } from '../actions';

const tasksReducer = (state = [], action) => {
  let result = null;
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.task];
    case UPDATE_TASK:
      result = [
        ...state.slice(0, state.findIndex((ele) => ele.id === action.task.id)),
        {
          id: action.task.id,
          task_name: action.task.task_name,
          description: action.task.description,
          progress: action.task.progress,
          todos: action.task.todos,
        },
        ...state.slice(state.findIndex((ele) => ele.id === action.task.id) + 1),
      ];
      return result;
    case RESET_TASK:
      return [];
    default:
      return state;
  }
};

export default tasksReducer;
