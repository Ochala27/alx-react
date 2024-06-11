
import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/logo.jpg';
import { AppContext } from '../App/AppContext';

class Header extends Component {
  static contextType = AppContext;

  handleLogOut = (e) => {
    e.preventDefault();
    this.context.logOut();
  }

  render() {
    const { user } = this.context;

    return (
      <header className={css(headerStyles.root, headerStyles.appHeader)}>
        <img src={logo} className={css(headerStyles.appLogo)} alt="logo" />
        <h1>School dashboard</h1>
        {user.isLoggedIn && (
          <div id="logoutSection" className={css(headerStyles.logoutSection)}>
            <p>Welcome {user.email} (<a href="#" onClick={this.handleLogOut}>logout</a>)</p>
          </div>
        )}
      </header>
    );
  }
}

const primaryColor = '#E11D3F';

const headerStyles = StyleSheet.create({
  appHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: `${primaryColor}`,
    borderBottom: `1px solid ${primaryColor}`,
  },

  appLogo: {
    height: '200px',
    width: '200px',
  },

  logoutSection: {
    marginLeft: 'auto',
    marginRight: '1rem',
  },
});

export default Header;

