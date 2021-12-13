import React from 'react';
// Styles
import './styles/App.css'
import './styles/desktop-styles'
import './styles/tablet-styles'
import './styles/Calendar.css'
import './styles/avatar-grid.css'
//
import Login from './components/Login';
import Signup from './components/Signup';
import CalendarComponent from './components/Calendar'
import Home from './components/Home'
import Profile from './components/Profile';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Tasks from './components/Tasks';


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

            <Route exact path="/profile">
              < Profile />
            </Route>

            <Route exact path="/tasks">
              < Tasks />
            </Route>
            

            
          </Switch>
        </div>
    </div>
    </Router >
  );
}

export default App;
