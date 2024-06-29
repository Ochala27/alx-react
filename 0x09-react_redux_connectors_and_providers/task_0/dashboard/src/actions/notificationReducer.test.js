// reducers/notificationReducer.test.js
import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  const initialState = {
    notifications: [],
    filter: 'DEFAULT'
  };

  it('should return the default state when no action is passed', () => {
    const state = notificationReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should return the data passed with FETCH_NOTIFICATIONS_SUCCESS', () => {
    const data = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', value: 'New data available' }
    ];
    const expectedState = {
      filter: 'DEFAULT',
      notifications: data.map(notification => ({ ...notification, isRead: false }))
    };
    const state = notificationReducer(undefined, { type: FETCH_NOTIFICATIONS_SUCCESS, data });
    expect(state).toEqual(expectedState);
  });

  it('should mark the correct notification as read with MARK_AS_READ', () => {
    const initialState = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, type: 'default', isRead: false, value: 'New course available' },
        { id: 2, type: 'urgent', isRead: false, value: 'New resume available' },
        { id: 3, type: 'urgent', isRead: false, value: 'New data available' }
      ]
    };
    const expectedState = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, type: 'default', isRead: false, value: 'New course available' },
        { id: 2, type: 'urgent', isRead: true, value: 'New resume available' },
        { id: 3, type: 'urgent', isRead: false, value: 'New data available' }
      ]
    };
    const state = notificationReducer(initialState, { type: MARK_AS_READ, index: 2 });
    expect(state).toEqual(expectedState);
  });

  it('should set the filter with SET_TYPE_FILTER', () => {
    const initialState = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, type: 'default', isRead: false, value: 'New course available' },
        { id: 2, type: 'urgent', isRead: false, value: 'New resume available' },
        { id: 3, type: 'urgent', isRead: false, value: 'New data available' }
      ]
    };
    const expectedState = {
      filter: 'URGENT',
      notifications: [
        { id: 1, type: 'default', isRead: false, value: 'New course available' },
        { id: 2, type: 'urgent', isRead: false, value: 'New resume available' },
        { id: 3, type: 'urgent', isRead: false, value: 'New data available' }
      ]
    };
    const state = notificationReducer(initialState, { type: SET_TYPE_FILTER, filter: 'URGENT' });
    expect(state).toEqual(expectedState);
  });
});

