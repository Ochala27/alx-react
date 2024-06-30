import { fromJS } from 'immutable';
import uiReducer from './uiReducer';
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../actions/uiActions';

describe('uiReducer', () => {
  const initialState = fromJS({
    isUserLoggedIn: false,
    isNotificationDrawerVisible: false,
    user: null,
  });

  it('should handle LOGIN_SUCCESS', () => {
    const action = {
      type: LOGIN_SUCCESS,
      user: { username: 'admin' },
    };
    const expectedState = initialState
      .set('isUserLoggedIn', true)
      .set('user', action.user);
    expect(uiReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle LOGOUT_SUCCESS', () => {
    const loggedInState = initialState
      .set('isUserLoggedIn', true)
      .set('user', { username: 'admin' });
    const action = {
      type: LOGOUT_SUCCESS,
    };
    const expectedState = initialState
      .set('isUserLoggedIn', false)
      .set('user', null);
    expect(uiReducer(loggedInState, action)).toEqual(expectedState);
  });
});

