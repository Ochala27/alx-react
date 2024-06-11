
import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import WithLoggingHOC from '../HOC/WithLogging';

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
    console.log('Login successful');
  };

  const handleChangeEmail = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    setEnableSubmit(emailValue !== '' && password !== '');
  };

  const handleChangePassword = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    setEnableSubmit(email !== '' && passwordValue !== '');
  };

  return (
    <React.Fragment>
      <div className="App">
        <main className={css(loginStyles.appBody)}>
          <p>Login to access the full dashboard</p>
          <form className={css(loginStyles.inputs)} onSubmit={handleLoginSubmit}>
            <label
              className={css(loginStyles.label)}
              htmlFor="email"
              onClick={() => {
                document.getElementById('email').focus();
              }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className={css(loginStyles.input)}
              value={email}
              onChange={handleChangeEmail}
            />
            <label
              className={css(loginStyles.label)}
              htmlFor="password"
              onClick={() => {
                document.getElementById('password').focus();
              }}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className={css(loginStyles.input)}
              value={password}
              onChange={handleChangePassword}
            />
            <input
              type="submit"
              className={css(loginStyles.button)}
              value="OK"
              disabled={!enableSubmit}
            />
          </form>
        </main>
      </div>
    </React.Fragment>
  );
}

const loginStyles = StyleSheet.create({
  appBody: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '3rem',
    height: '100%',
  },
  inputs: {
    '@media (min-width: 350px)': {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '200px',
    },
    '@media (min-width: 900px)': {
      display: 'flex',
      flexDirection: 'row',
    },
  },
  input: {
    height: '15px',
    marginLeft: '0.2rem',
    marginTop: '0.5rem',
  },
  label: {
    marginTop: '0.5rem',
  },
  button: {
    height: '21px',
    marginTop: '0.6rem',
    maxWidth: '40px',
  },
});

export default WithLoggingHOC(Login);

