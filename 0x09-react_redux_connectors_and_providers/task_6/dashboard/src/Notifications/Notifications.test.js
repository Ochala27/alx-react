import React from 'react';
import { shallow } from 'enzyme';
import { Notifications } from '../Notifications';
import { setLoadingState, setNotifications, fetchNotifications, markAsRead } from '../actions/notificationActionCreators';
import notificationReducer from '../reducers/notificationReducer';
import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/actionTypes';
import { getUnreadNotifications } from '../selectors/notificationSelectors';

describe('<Notifications />', () => {
  it('calls fetchNotifications when component is mounted', () => {
    const fetchNotifications = jest.fn();
    shallow(<Notifications fetchNotifications={fetchNotifications} unreadNotifications={fromJS([])} loading={false} />);
    expect(fetchNotifications).toHaveBeenCalled();
  });

  it('renders loading message when loading is true', () => {
    const wrapper = shallow(<Notifications fetchNotifications={() => {}} unreadNotifications={fromJS([])} loading={true} />);
    expect(wrapper.text()).toEqual('Loading notifications...');
  });

  it('renders notifications when loading is false', () => {
    const unreadNotifications = fromJS([
      { id: 1, message: 'Notification 1', read: false },
      { id: 2, message: 'Notification 2', read: false },
    ]);
    const wrapper = shallow(<Notifications fetchNotifications={() => {}} unreadNotifications={unreadNotifications} loading={false} />);
    expect(wrapper.find('li')).toHaveLength(2);
  });

  it('calls markAsRead when clicking on notification', () => {
    const markAsRead = jest.fn();
    const unreadNotifications = fromJS([
      { id: 1, message: 'Notification 1', read: false },
    ]);
    const wrapper = shallow(<Notifications fetchNotifications={() => {}} markAsRead={markAsRead} unreadNotifications={unreadNotifications} loading={false} />);
    wrapper.find('li').simulate('click');
    expect(markAsRead).toHaveBeenCalledWith(1);
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

  it('markAsRead creates the right action', () => {
    const action = markAsRead(1);
    expect(action.type).toEqual('MARK_AS_READ');
    expect(action.payload).toEqual(1);
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

  it('handles FETCH_NOTIFICATIONS_SUCCESS correctly', () => {
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

