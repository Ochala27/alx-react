// reducers/notificationReducer.test.js
import { Map } from 'immutable';
import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

describe('notificationReducer', () => {
  const initialState = Map({
    notifications: Map(),
    filter: 'DEFAULT'
  });

  it('should return the default state when no action is passed', () => {
    const state = notificationReducer(undefined, {});
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it('should return the data passed with FETCH_NOTIFICATIONS_SUCCESS', () => {
    const data = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', value: 'New data available' }
    ];
    const normalizedData = notificationsNormalizer(data);
    const expectedState = initialState.set('notifications', Map(normalizedData.entities.notifications));
    const state = notificationReducer(undefined, { type: FETCH_NOTIFICATIONS_SUCCESS, data });
    expect(state.toJS()).toEqual(expectedState.toJS());
  });

  it('should mark the correct notification as read with MARK_AS_READ', () => {
    const data = [
      { id: 1, type: 'default', isRead: false, value: 'New course available' },
      { id: 2, type: 'urgent', isRead: false, value: 'New resume available' },
      { id: 3, type: 'urgent', isRead: false, value: 'New data available' }
    ];
    const normalizedData = notificationsNormalizer(data);
    const initialStateWithNotifications = initialState.set('notifications', Map(normalizedData.entities.notifications));
    const state = notificationReducer(initialStateWithNotifications, { type: MARK_AS_READ, index: 2 });
    expect(state.getIn(['notifications', 2, 'isRead'])).toBe(true);
  });

  it('should set the filter with SET_TYPE_FILTER', () => {
    const data = [
      { id: 1, type: 'default', isRead: false, value: 'New course available' },
      { id: 2, type: 'urgent', isRead: false, value: 'New resume available' },
      { id: 3, type: 'urgent', isRead: false, value: 'New data available' }
    ];
    const normalizedData = notificationsNormalizer(data);
    const initialStateWithNotifications = initialState.set('notifications', Map(normalizedData.entities.notifications));
    const state = notificationReducer(initialStateWithNotifications, { type: SET_TYPE_FILTER, filter: 'URGENT' });
    expect(state.get('filter')).toBe('URGENT');
  });
});

