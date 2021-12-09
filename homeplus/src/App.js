import React from 'react';
import './styles/App.css';
import './styles/Calendar.css';
import Login from './components/Login';
import Signup from './components/Signup';
import CalendarComponent from './components/Calendar'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router >
    <div className="App">
        <div className="container">
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/signup">
              <Signup />
            </Route>

            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/calendar">
              < CalendarComponent />
            </Route>
            
          </Switch>
        </div>
    </div>
    </Router >
  );
}

export default App;
