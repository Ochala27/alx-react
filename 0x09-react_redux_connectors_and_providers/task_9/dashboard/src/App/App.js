import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchNotifications } from '../actions/notificationActionCreators';
import Notifications from './Notifications';

class App extends Component {
  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    const { listNotifications, loading } = this.props;

    return (
      <div className="App">
        {/* Other components and markup */}
        <Notifications listNotifications={listNotifications} loading={loading} />
      </div>
    );
  }
}

App.propTypes = {
  listNotifications: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  fetchNotifications: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  listNotifications: state.notifications.get('notifications').toJS(),
  loading: state.notifications.get('loading'),
});

const mapDispatchToProps = {
  fetchNotifications,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

