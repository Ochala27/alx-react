import { fromJS } from 'immutable';
import { getUnreadNotificationsByType } from './notificationSelector';

describe('notificationSelector', () => {
  const state = fromJS({
    notifications: {
      messages: [
        { id: '1', type: 'default', value: 'New course available', isRead: false },
        { id: '2', type: 'urgent', value: 'New resume available', isRead: false },
        { id: '3', type: 'default', value: 'New course available', isRead: true },
      ],
      filter: 'default',
    },
  });

  it('should return all unread notifications when filter is default', () => {
    const notifications = getUnreadNotificationsByType(state);
    expect(notifications.size).toBe(2);
    expect(notifications.get(0).get('id')).toBe('1');
    expect(notifications.get(1).get('id')).toBe('2');
  });

  it('should return unread urgent notifications when filter is urgent', () => {
    const urgentState = state.setIn(['notifications', 'filter'], 'urgent');
    const notifications = getUnreadNotificationsByType(urgentState);
    expect(notifications.size).toBe(1);
    expect(notifications.get(0).get('id')).toBe('2');
  });
});

