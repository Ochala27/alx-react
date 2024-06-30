import React from 'react';
import { shallow } from 'enzyme';
import { Notifications } from './Notifications';
import { setNotificationFilter, fetchNotifications } from '../actions/notificationActionCreators';

jest.mock('../actions/notificationActionCreators', () => ({
  setNotificationFilter: jest.fn(),
  fetchNotifications: jest.fn(),
}));

const notifications = [
  { id: '1', type: 'default', value: 'New course available', isRead: false },
  { id: '2', type: 'urgent', value: 'New resume available', isRead: false },
];

const setup = (propsOverride = {}) => {
  const props = {
    listNotifications: notifications,
    fetchNotifications: jest.fn(),
    setNotificationFilter: jest.fn(),
    ...propsOverride,
  };

  const wrapper = shallow(<Notifications {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('Notifications Component', () => {
  it('should call fetchNotifications when mounted', () => {
    const { props } = setup();
    expect(props.fetchNotifications).toHaveBeenCalled();
  });

  it('should call setNotificationFilter with URGENT when clicking the first button', () => {
    const { wrapper, props } = setup();
    wrapper.find('button').at(0).simulate('click');
    expect(props.setNotificationFilter).toHaveBeenCalledWith('urgent');
  });

  it('should call setNotificationFilter with DEFAULT when clicking the second button', () => {
    const { wrapper, props } = setup();
    wrapper.find('button').at(1).simulate('click');
    expect(props.setNotificationFilter).toHaveBeenCalledWith('default');
  });
});

