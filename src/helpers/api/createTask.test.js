import createTask from './createTask';

jest.mock('./createTask');

describe('creates task and return task created', () => {
  const taskName = 'first task';
  const description = 'some description';
  const progress = 25;
  const todos = {};
  it('returns 201 status code', async () => {
    const response = await createTask(taskName, description, progress, todos);
    expect(response.status).toBe(201);
  });
  it('returns task created', async () => {
    const response = await createTask(taskName, description, progress, todos);
    expect(response.json()).toEqual({
      taskName: 'first task',
      description,
      progress,
      todos,
    });
  });
});
