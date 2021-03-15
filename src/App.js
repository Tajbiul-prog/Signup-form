import './App.css';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import NotFound from './component/NotFound';
import Dashboard from './component/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
      <Switch>
          <Route exact path="/">
            <SignIn/>
          </Route>
          <Route path="/home">
            <SignIn/>
          </Route>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route path="/create-new-account">
            <SignUp/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
