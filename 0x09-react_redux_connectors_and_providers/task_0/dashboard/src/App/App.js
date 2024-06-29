import React from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends React.Component {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <div className="App">
        {isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Log In</h1>}
      </div>
    );
  }
}

// Function to map state to props
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.uiReducer.isLoggedIn
  };
};

// Connect the mapStateToProps to the App component
export default connect(mapStateToProps)(App);

