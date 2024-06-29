import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
  render() {
    const { type, html, value, markAsRead, id } = this.props;
    const styleDataType = type === 'default' ? styles.blue : styles.red;
    if (value) {
      return (
        <li
          data-notification-type={type}
          className={css(styles.notificationItem, styleDataType)}
          onClick={() => markAsRead(id)}
        >
          {value}
        </li>
      );
    } else {
      return (
        <li
          dangerouslySetInnerHTML={html}
          className={css(styles.notificationItem, styleDataType)}
          onClick={() => markAsRead(id)}
          data-notification-type={type}
        ></li>
      );
    }
  }
}

const styles = StyleSheet.create({
  notificationItem: {
    width: '100%', // Take the entire screen width
    borderBottom: '1px solid black', // Black border at the bottom
    fontSize: '20px', // Font size of the text
    padding: '10px 8px', // Padding for the item
  },

  red: {
    color: 'red',
  },

  blue: {
    color: 'blue',
  },
});

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  html: {},
  markAsRead: () => {},
  id: 0,
};

export default NotificationItem;
