import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Notifications from './Notifications';
import { fetchNotifications, setNotificationFilter } from '../actions/notificationActionCreators';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';

const NotificationsContainer = ({ fetchNotifications, setNotificationFilter, notifications }) => {
  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  return (
    <Notifications
      listNotifications={notifications}
      setNotificationFilter={setNotificationFilter}
    />
  );
};

const mapStateToProps = (state) => ({
  notifications: getUnreadNotificationsByType(state),
});

const mapDispatchToProps = {
  fetchNotifications,
  setNotificationFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer);

