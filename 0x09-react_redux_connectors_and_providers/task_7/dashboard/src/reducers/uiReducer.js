import { Map } from 'immutable';
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  SHOW_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from '../actions/uiActions';

const initialState = Map({
  isUserLoggedIn: false,
  isNotificationDrawerVisible: false,
  user: null,
});

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return state
        .set('isUserLoggedIn', true)
        .set('user', action.user);
    case LOGIN_FAILURE:
    case LOGOUT_SUCCESS:
      return state
        .set('isUserLoggedIn', false)
        .set('user', null);
    case SHOW_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', true);
    case HIDE_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', false);
    default:
      return state;
  }
};

export default uiReducer;

