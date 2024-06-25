
import React from 'react';
import logo from '../assets/logo.jpg';
import { StyleSheet, css } from 'aphrodite';

export default function Header(props) {
  return (
    <header className={css(styles.appHeader)}>
      <img src={logo} className={css(styles.appLogo)} alt="logo" />
      <h1>School dashboard</h1>
    </header>
  );
}

const styles = StyleSheet.create({
  appHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: '#E11D3F',
    borderBottom: '3px solid #E11D3F',
  },
  appLogo: {
    height: '200px',
    width: '200px',
  },
});

