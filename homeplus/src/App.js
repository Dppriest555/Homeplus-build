import React from 'react';
import './styles/App.css';
import './styles/Calendar.css';
import Signup from './components/Signup';
import CalendarComponent from './components/Calendar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router >
    <div className="App">
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Signup />
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
