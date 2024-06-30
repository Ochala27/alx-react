import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Header.css';
import { logout } from '../actions/uiActions';

const Header = ({ user, logout }) => {
  return (
    <div className="Header">
      <h1>Header content here</h1>
      {user ? (
        <div>
          <p>Logged in as: {user.username}</p>
          <a href="#" onClick={logout}>Log Out</a>
        </div>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
};

// Function to map state to props
const mapStateToProps = (state) => {
  return {
    user: state.get('user'),
  };
};

// Function to map dispatch to props
const mapDispatchToProps = {
  logout,
};

// Define propTypes
Header.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
  }),
  logout: PropTypes.func.isRequired,
};

// Connect the mapStateToProps and mapDispatchToProps to the Header component
export default connect(mapStateToProps, mapDispatchToProps)(Header);

