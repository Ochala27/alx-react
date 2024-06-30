// src/selectors/notificationSelector.test.js
import { Map } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('notification selectors', () => {
  const state = {
    notifications: Map({
      filter: 'DEFAULT',
      notifications: Map({
        1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
        2: { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
        3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
      })
    })
  };

  it('filterTypeSelected works as expected', () => {
    const filter = filterTypeSelected(state);
    expect(filter).toEqual('DEFAULT');
  });

  it('getNotifications returns a list of the notifications within the reducer', () => {
    const notifications = getNotifications(state);
    expect(notifications.toJS()).toEqual(state.notifications.get('notifications').toJS());
  });

  it('getUnreadNotifications returns a list of the unread notifications within the reducer', () => {
    const unreadNotifications = getUnreadNotifications(state);
    expect(unreadNotifications.toJS()).toEqual({
      1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
      3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
    });
  });
});

