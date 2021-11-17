import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import store from '../store';
import Tasks from './Tasks';

describe('Tasks component', () => {
  it('renders list of task components', () => {
    const history = createMemoryHistory();
    const taskName = 'first task';
    const description = 'content';
    const progress = 15;
    render(
      <Router history={history}>
        <Provider store={store}>
          <Tasks
            tasks={[{
              id: 1, taskName, description, progress,
            }]}
            signedIn
          />
        </Provider>
      </Router>,
    );
    expect(screen.getByText('first task')).toBeInTheDocument();
    expect(screen.getByText('content')).toBeInTheDocument();
  });
});
