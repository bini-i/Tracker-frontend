import {
  Redirect, Route, Switch,
  useLocation,
} from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './styles/App.css';
import NewSession from './components/NewSession';
import NewAccount from './components/NewAccount';
import MenuBar from './components/MenuBar';
import CreateBtn from './components/CreateBtn';
import Tasks from './components/Tasks';
import Task from './components/Task';
import { mapDispatchToProps, mapStateToProps } from './reducers';
import NewTaskForm from './components/NewTaskForm';
import getAllTasks from './helpers/api/getAllTasks';

const App = ({ addTask }) => {
  useEffect(async () => {
    const fetchedTasks = await getAllTasks();
    console.log('fetching');
    console.log(fetchedTasks);
    fetchedTasks.forEach((task) => {
      addTask(task);
    });
  }, []);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <MenuBar />
        </header>
      </div>
      <div className="App-body">
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login" component={NewSession} />
          <Route exact path="/signup" component={NewAccount} />
          <Route exact path="/tasks" component={Tasks} />
          <Route exact path="/task" component={Task} />
          <Route exact path="/newtask" component={NewTaskForm} />
        </Switch>
      </div>
      {useLocation().pathname !== '/newtask' ? <CreateBtn /> : null}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  addTask: PropTypes.func.isRequired,
};
