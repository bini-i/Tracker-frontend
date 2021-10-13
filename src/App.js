import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import './styles/App.css';
import NewSession from './components/NewSession';
import NewAccount from './components/NewAccount';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          LOGIN
        </header>
      </div>
      <BrowserRouter>
        <div className="App-body">
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login">
            <NewSession />
          </Route>
          <Route exact path="/signup">
            <NewAccount />
          </Route>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
