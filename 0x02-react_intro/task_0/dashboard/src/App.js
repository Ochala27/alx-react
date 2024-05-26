// src/App.js
import React from 'react';
import './App.css';
import Notifications from './components/Notifications/Notifications';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';

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

