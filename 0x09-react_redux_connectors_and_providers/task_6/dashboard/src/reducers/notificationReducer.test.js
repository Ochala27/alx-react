import { Map, fromJS } from 'immutable';
import notificationReducer from '../reducers/notificationReducer';
import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/actionTypes';

describe('notificationReducer', () => {
  it('should return the initial state', () => {
    const initialState = Map({
      notifications: Map(),
      loading: false,
    });

    expect(notificationReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SET_LOADING_STATE', () => {
    const initialState = Map({
      notifications: Map(),
      loading: false,
    });

    const action = {
      type: SET_LOADING_STATE,
      payload: true,
    };

    const expectedState = initialState.set('loading', true);

    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const initialState = Map({
      notifications: Map(),
      loading: false,
    });

    const notifications = [
      { id: 1, message: 'Notification 1' },
      { id: 2, message: 'Notification 2' },
    ];

    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      payload: notifications,
    };

    const expectedState = initialState.set('notifications', fromJS(notifications)).mergeDeep(initialState.get('notifications'));

    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });
});

