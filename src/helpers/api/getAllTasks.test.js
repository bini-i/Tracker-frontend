import getAllTasks from './getAllTasks';

jest.mock('./getAllTasks');

test('returns list of tasks from API', async () => {
  const response = await getAllTasks();
  expect(response).toEqual({
    taskName: 'first task',
    description: 'content',
    progress: 15,
    todos: {},
  });
});
