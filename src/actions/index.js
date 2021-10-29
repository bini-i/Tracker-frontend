export const SET_SIGNED_IN = 'set sign in';
export const ADD_TASK = 'add_task';
export const UPDATE_TASK = 'update_task';
export const RESET_TASK = 'reset_task';

export const setSignedIn = (status) => ({
  type: SET_SIGNED_IN,
  status,
});

export const addTask = (task) => ({
  type: ADD_TASK,
  task,
});

export const updateTask = (task) => ({
  type: UPDATE_TASK,
  task,
});

export const resetTasks = () => ({
  type: RESET_TASK,
});
