// src/selectors/notificationSelector.js
import { createSelector } from 'reselect';

const notificationState = (state) => state.notifications;

export const filterTypeSelected = createSelector(
  [notificationState],
  (notifications) => notifications.get('filter')
);

export const getNotifications = createSelector(
  [notificationState],
  (notifications) => notifications.get('notifications')
);

export const getUnreadNotifications = createSelector(
  [getNotifications],
  (notifications) => notifications.filter(notification => !notification.isRead)
);

