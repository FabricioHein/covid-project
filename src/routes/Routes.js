import Home from '../pages/home'
import Login from "../pages/login";
import {  BrowserRouter as Router,
  Switch,
  Route, Redirect
} from "react-router-dom";


export default function Routes() {
  const userLog = localStorage.getItem('login')

  function SignApp() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Redirect from='*' to='/Home' />

        </Switch>
      </Router>
    )
  }
  function SignLogin() {
    return (
      <Router>
        <Switch>
        <Route exact path="/login">
        <Login />
      </Route>
      <Redirect from='*' to='/Login' />
      </Switch>
      </Router>
     
    )

  }

  

  return (
    <>
        {userLog?  SignApp() : SignLogin()}

    </>
    );
}

