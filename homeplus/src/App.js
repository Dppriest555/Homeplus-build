import React from 'react';
import './styles/App.css';
import './styles/Calendar.css';
import Signup from './components/Signup';


function App() {
  return (
    <div className="App">
        <div className="container">
          <Signup />
        </div>
    </div>
  );
}

export default App;
