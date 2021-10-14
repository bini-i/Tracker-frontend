import {
  Redirect, Route, Switch,
} from 'react-router-dom';
import './styles/App.css';
import NewSession from './components/NewSession';
import NewAccount from './components/NewAccount';
import Tasks from './components/Tasks';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Task Tracker</h1>
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
        </Switch>
      </div>
    </>
  );
}

export default App;
