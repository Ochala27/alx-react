
import React, { Component } from 'react';
import close_icon from '../assets/close-icon.png';
import { StyleSheet, css } from 'aphrodite';

const opacityChange = StyleSheet.keyframes({
  '0%': { opacity: 0.5 },
  '100%': { opacity: 1 },
});

const bounceEffect = StyleSheet.keyframes({
  '0%': { transform: 'translateY(0px)' },
  '50%': { transform: 'translateY(-5px)' },
  '100%': { transform: 'translateY(5px)' },
});

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
        <div className={css([styles.menuItem, displayDrawer && styles.menuItemHovered])}>
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
    position: 'fixed',
    top: '20px',
    right: '20px',
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    transition: 'opacity 1s, transform 0.5s',
    ':hover': {
      animationName: [opacityChange, bounceEffect],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3',
    },
  },
  menuItemHovered: {
    opacity: 1,
    transform: 'translateY(-5px)',
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

