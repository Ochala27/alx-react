import React from 'react';
import { shallow } from 'enzyme';
import { NotificationsContainer } from './NotificationsContainer';
import { fetchNotifications } from '../actions/notificationActionCreators';

jest.mock('../actions/notificationActionCreators', () => ({
  fetchNotifications: jest.fn(),
  setNotificationFilter: jest.fn(),
}));

const setup = (propsOverride = {}) => {
  const props = {
    fetchNotifications: jest.fn(),
    notifications: [],
    ...propsOverride,
  };

  const wrapper = shallow(<NotificationsContainer {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('NotificationsContainer Component', () => {
  it('should call fetchNotifications when mounted', () => {
    const { props } = setup();
    expect(props.fetchNotifications).toHaveBeenCalled();
  });
});

