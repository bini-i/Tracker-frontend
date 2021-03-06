import {
  Redirect, Route, Switch,
  useLocation, useHistory,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
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

const App = ({
  addTask, resetTasks, signedIn, setSignedIn,
}) => {
  const [paths] = useState(['/tasks']);
  const history = useHistory();

  // eslint-disable-next-line consistent-return
  useEffect(async () => {
    if (localStorage.getItem('email') && localStorage.getItem('token')) {
      setSignedIn(true);
    }

    if (signedIn) {
      resetTasks();
      const fetchedTasks = await getAllTasks();
      fetchedTasks.forEach((task) => {
        addTask(task);
      });
      history.push('/tasks');
    } else {
      history.push('/login');
    }
  }, [signedIn]);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <MenuBar signedIn={signedIn} setSignedIn={setSignedIn} />
        </header>
      </div>
      <div className="App-body">
        <Switch>
          <Route exact path="/">
            {signedIn ? <Redirect to="/tasks" /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/login" component={NewSession} />
          <Route exact path="/signup" component={NewAccount} />
          <Route exact path="/tasks" component={Tasks} />
          <Route exact path="/task" component={Task} />
          <Route exact path="/newtask" component={NewTaskForm} />
        </Switch>
      </div>
      {paths.indexOf(useLocation().pathname) >= 0 ? <CreateBtn /> : null}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  addTask: PropTypes.func.isRequired,
  resetTasks: PropTypes.func.isRequired,
  signedIn: PropTypes.bool.isRequired,
  setSignedIn: PropTypes.func.isRequired,
};
