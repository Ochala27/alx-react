import React from 'react';
import './App.css';
import holbertonLogo from './holberton_logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holbertonLogo} className="App-logo" alt="logo" />
        <p>
          Welcome to the Dashboard
        </p>
      </header>
    </div>
  );
}

export default App;

