// src/App.js
import React from 'react';
import './App.css';
import Notifications from './src/Notifications/Notifications';
import Header from './src/Header/Header';
import Login from './src/Login/Login';
import Footer from './src/Footer/Footer';

const App = () => {
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">
        <Header />
        <main className="App-main">
          <Login />
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default App;
