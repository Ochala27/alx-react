
import React, { Component } from 'react';
import close_icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';

import './Notifications.css';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: this.props.listNotifications,
    };
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer } = this.props;
    const { notifications } = this.state;
    return (
      <>
        <div className="menuItem">
          <p>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className="Notifications">
            <button
              style={{
                position: 'absolute',
                background: 'transparent',
                border: 'none',
                right: '20px',
              }}
              aria-label="close"
              onClick={() => {
                console.log('Close button has been clicked');
              }}
            >
              <img src={close_icon} alt="close" height="15px" width="15px"></img>
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              {/* listNotifications is empty condition */}
              {notifications.length === 0 && (
                <li>
                  <p>No notification available yet</p>
                </li>
              )}
              {/* render listNotifications */}
              {notifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  id={notification.id}
                  html={notification.html}
                  type={notification.type}
                  value={notification.value}
                  markAsRead={this.markAsRead}
                />
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;

