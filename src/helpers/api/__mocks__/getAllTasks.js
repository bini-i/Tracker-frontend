const getAllTasks = () => Promise.resolve(
  {
    taskName: 'first task',
    description: 'content',
    progress: 15,
    todos: {},
  },
);

export default getAllTasks;
