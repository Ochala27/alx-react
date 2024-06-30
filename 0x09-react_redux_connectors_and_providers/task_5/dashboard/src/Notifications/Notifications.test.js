import React from 'react';
import { shallow } from 'enzyme';
import { Notifications } from '../Notifications';
import { setLoadingState, setNotifications, fetchNotifications } from '../actions/notificationActionCreators';
import notificationReducer from '../reducers/notificationReducer';
import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/actionTypes';

describe('<Notifications />', () => {
  it('calls fetchNotifications when component is mounted', () => {
    const fetchNotifications = jest.fn();
    shallow(<Notifications fetchNotifications={fetchNotifications} listNotifications={[]} loading={false} />);
    expect(fetchNotifications).toHaveBeenCalled();
  });

  it('renders loading message when loading is true', () => {
    const wrapper = shallow(<Notifications fetchNotifications={() => {}} listNotifications={[]} loading={true} />);
    expect(wrapper.text()).toEqual('Loading notifications...');
  });

  it('renders notifications when loading is false', () => {
    const listNotifications = fromJS([
      { id: 1, message: 'Notification 1' },
      { id: 2, message: 'Notification 2' },
    ]);
    const wrapper = shallow(<Notifications fetchNotifications={() => {}} listNotifications={listNotifications} loading={false} />);
    expect(wrapper.find('li')).toHaveLength(2);
  });
});

describe('notificationActionCreators', () => {
  it('setLoadingState creates the right action', () => {
    const action = setLoadingState(true);
    expect(action).toEqual({
      type: SET_LOADING_STATE,
      payload: true,
    });
  });

  it('setNotifications creates the right action', () => {
    const notifications = [
      { id: 1, message: 'Notification 1' },
      { id: 2, message: 'Notification 2' },
    ];
    const action = setNotifications(notifications);
    expect(action).toEqual({
      type: FETCH_NOTIFICATIONS_SUCCESS,
      payload: notifications,
    });
  });

  it('fetchNotifications creates the right actions', async () => {
    const dispatch = jest.fn();
    await fetchNotifications()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(setLoadingState(true));
    // Add more checks based on mock API response
  });
});

describe('notificationReducer', () => {
  it('handles SET_LOADING_STATE correctly', () => {
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
});

