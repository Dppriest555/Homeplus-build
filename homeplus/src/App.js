import React from 'react';
import './styles/App.css';
import './styles/Calendar.css';
import Calendar from 'react-calendar';


function App() {
  return (
    <div className="App">
        <div className="container">
          <Calendar/>
        </div>
    </div>
  );
}

export default App;
