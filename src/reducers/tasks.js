import { ADD_TASK, UPDATE_TASK } from '../actions';

const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.task];
    case UPDATE_TASK:
      // console.log(state.length);
      // console.log(state.findIndex((ele) => ele.id === action.task.id));
      // console.log(state.findIndex((ele) => ele.id === action.task.id) + 1);
      // console.log(state.slice(state.findIndex((ele) => ele.id === action.task.id) + 1));
      // console.log({
      //   id: action.task.id,
      //   taskName: action.task.taskName,
      //   description: action.task.description,
      //   progress: action.task.progress,
      // });
      return [
        ...state.slice(0, state.findIndex((ele) => ele.id === action.task.id)),
        {
          id: action.task.id,
          taskName: action.task.taskName,
          description: action.task.description,
          progress: action.task.progress,
        },
        ...state.slice(state.findIndex((ele) => ele.id === action.task.id) + 1),
      ];
    default:
      return state;
  }
};

export default tasksReducer;
