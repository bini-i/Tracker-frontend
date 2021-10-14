import {
  Redirect, Route, Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import './styles/App.css';
import NewSession from './components/NewSession';
import NewAccount from './components/NewAccount';
import MenuBar from './components/MenuBar';
import Tasks from './components/Tasks';
import { mapDispatchToProps, mapStateToProps } from './reducers';

function App() {
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
        </Switch>
      </div>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
