import React from 'react';
import CountDownFC from './CountDownFC';
import CountDown from './CountDown'
import './App.css';

function App() {
  


  
  return (
    <div className="App">
      <div className="App-header">
        <CountDownFC defaultMinutes={1} defaultSeconds={20} />
        <CountDown />
      </div>
    </div>
  );
}

export default App;
