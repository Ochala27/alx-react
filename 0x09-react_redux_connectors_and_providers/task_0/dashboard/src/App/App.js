import React from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends React.Component {
  render() {
    const { isLoggedIn, displayDrawer } = this.props;
    return (
      <div className="App">
        {isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Log In</h1>}
        {displayDrawer && <div className="notification-drawer">Notifications</div>}
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

// Connect the mapStateToProps to the App component
export default connect(mapStateToProps)(App);

