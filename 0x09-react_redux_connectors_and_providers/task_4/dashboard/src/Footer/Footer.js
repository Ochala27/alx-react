import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Footer.css';

const Footer = ({ user }) => {
  return (
    <div className="Footer">
      <p>Footer content here</p>
      {user && <p>Logged in as: {user.username}</p>}
    </div>
  );
};

// Function to map state to props
const mapStateToProps = (state) => {
  return {
    user: state.get('user'),
  };
};

// Define propTypes
Footer.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
  }),
};

// Connect the mapStateToProps to the Footer component
export default connect(mapStateToProps)(Footer);

