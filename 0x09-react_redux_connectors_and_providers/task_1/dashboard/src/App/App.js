import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './App.css';
import { displayNotificationDrawer, hideNotificationDrawer } from './actions/uiActions';

class App extends React.Component {
  render() {
    const { isLoggedIn, displayDrawer, displayNotificationDrawer, hideNotificationDrawer } = this.props;
    return (
      <div className="App">
        {isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Log In</h1>}
        {displayDrawer ? (
          <div className="notification-drawer">
            Notifications
            <button onClick={hideNotificationDrawer}>Hide Drawer</button>
          </div>
        ) : (
          <button onClick={displayNotificationDrawer}>Show Drawer</button>
        )}
      </div>
    );
  }
}

// Function to map state to props
export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get('isUserLoggedIn'),
    displayDrawer: state.get('isNotificationDrawerVisible')
  };
};

// Function to map dispatch to props
const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer
};

// Define propTypes
App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
};

// Define defaultProps
App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
};

// Connect the mapStateToProps and mapDispatchToProps to the App component
export default connect(mapStateToProps, mapDispatchToProps)(App);

