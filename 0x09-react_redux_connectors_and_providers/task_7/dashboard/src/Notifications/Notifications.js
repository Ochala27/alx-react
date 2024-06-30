import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchNotifications, markAsRead } from '../actions/notificationActionCreators';
import { getUnreadNotifications } from '../selectors/notificationSelectors';

class Notifications extends Component {
  componentDidMount() {
    this.props.fetchNotifications();
  }

  handleMarkAsRead = (notificationId) => {
    this.props.markAsRead(notificationId);
  };

  render() {
    const { unreadNotifications, loading } = this.props;

    if (loading) {
      return <p>Loading notifications...</p>;
    }

    return (
      <ul>
        {unreadNotifications.map((notification) => (
          <li key={notification.get('id')} onClick={() => this.handleMarkAsRead(notification.get('id'))}>
            {notification.get('message')}
          </li>
        ))}
      </ul>
    );
  }
}

Notifications.propTypes = {
  unreadNotifications: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  fetchNotifications: PropTypes.func.isRequired,
  markAsRead: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  unreadNotifications: getUnreadNotifications(state),
  loading: state.notifications.get('loading'),
});

const mapDispatchToProps = {
  fetchNotifications,
  markAsRead,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);

