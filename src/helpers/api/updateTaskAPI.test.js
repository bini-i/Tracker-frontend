import updateTaskAPI from './updateTaskAPI';

jest.mock('./updateTaskAPI');

test('update given task', async () => {
  const taskName = 'first task';
  const description = 'some description';
  const progress = 25;
  const todos = {};

  const response = await updateTaskAPI(taskName, description, progress, todos);
  expect(response.json()).toEqual({
    taskName,
    description,
    progress,
    todos,
  });
});
