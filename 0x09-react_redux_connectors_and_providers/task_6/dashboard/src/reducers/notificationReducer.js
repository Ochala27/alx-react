import { Map, fromJS } from 'immutable';
import {
  SET_LOADING_STATE,
  FETCH_NOTIFICATIONS_SUCCESS
} from '../actions/actionTypes';

const initialState = Map({
  notifications: Map(),
  loading: false,
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_STATE:
      return state.set('loading', action.payload);
    case FETCH_NOTIFICATIONS_SUCCESS:
      return state.set('notifications', fromJS(action.payload)).mergeDeep(state.get('notifications'));
    default:
      return state;
  }
};

export default notificationReducer;

