const createTask = (taskName, description, progress, todos) => Promise.resolve(
  {
    status: 201,
    json: () => ({
      taskName,
      description,
      progress,
      todos,
    }),
  },
);

export default createTask;
