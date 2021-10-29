import { combineReducers } from 'redux';
import signedInReducer from './signIn';
import tasksReducer from './tasks';
import {
  setSignedIn, addTask, updateTask, resetTasks,
} from '../actions';

export const rootReducer = combineReducers({
  signedIn: signedInReducer,
  tasks: tasksReducer,
});

export const mapStateToProps = (state) => ({
  signedIn: state.signedIn,
  tasks: state.tasks,
});

export const mapDispatchToProps = (dispatch) => ({
  setSignedIn: (status) => {
    dispatch(setSignedIn(status));
  },
  addTask: (task) => {
    dispatch(addTask(task));
  },
  updateTask: (task) => {
    dispatch(updateTask(task));
  },
  resetTasks: () => {
    dispatch(resetTasks());
  },
});
