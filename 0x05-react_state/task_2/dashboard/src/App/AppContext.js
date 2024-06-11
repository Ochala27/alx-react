
import React from 'react';

const defaultUser = {
  email: '',
  password: '',
  isLoggedIn: false,
};

const defaultLogOut = () => {
  console.log('logOut function console log for testing');
};

const AppContext = React.createContext({
  user: defaultUser,
  logOut: defaultLogOut,
});

export { AppContext, defaultUser, defaultLogOut };

