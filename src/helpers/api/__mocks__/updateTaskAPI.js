const updateTaskAPI = (taskName, description, progress, todos) => Promise.resolve(
  {
    json: () => ({
      taskName,
      description,
      progress,
      todos,
    }),
  },
);

export default updateTaskAPI;
