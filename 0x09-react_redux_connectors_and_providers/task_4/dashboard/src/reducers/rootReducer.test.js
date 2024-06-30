import { combineReducers } from 'redux';
import { Map } from 'immutable';
import rootReducer from './rootReducer';
import courseReducer from './courseReducer';
import notificationReducer from './notificationReducer';
import uiReducer from './uiReducer';

describe('rootReducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      courses: Map(),
      notifications: Map(),
      ui: Map()
    };

    const action = { type: 'TEST_ACTION' };

    expect(rootReducer(undefined, action)).toEqual(initialState);
  });
});

