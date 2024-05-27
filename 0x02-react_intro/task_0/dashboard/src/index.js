import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Notifications from './Notifications';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <div id="root-notifications">
        <Notifications />
      </div>
      <div id="root-app">
        <App />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

