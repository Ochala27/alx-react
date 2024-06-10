
import React, { Component } from 'react';
import close_icon from '../assets/close-icon.png';
import { StyleSheet, css } from 'aphrodite';

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

  shouldComponentUpdate(nextProps, nextState) {
    // Only update if the length of the new listNotifications array is longer
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    const { displayDrawer } = this.props;
    const { notifications } = this.state;
    return (
      <>
        <div className={css(styles.menuItem)}>
          <p>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className={css(styles.notifications)}>
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
                <li key={notification.id} className={css(styles.notification, notification.type === 'urgent' ? styles.urgent : null)}>
                  {notification.html ? <div dangerouslySetInnerHTML={notification.html}></div> : notification.value}
                </li>
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  menuItem: {
    position: 'relative',
    right: '3rem',
    p: {
      right: '3rem',
      position: 'absolute',
    },
  },
  notifications: {
    border: '1px solid #E11D3F',
    padding: '1rem',
  },
  notification: {
    color: 'blue',
    ':last-child': {
      borderBottom: 'none',
    },
  },
  urgent: {
    color: 'red',
  },
});

export default Notifications;

