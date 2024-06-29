import React from 'react';
import { shallow } from 'enzyme';
import App, { mapStateToProps } from './App';

describe('<App />', () => {
  let wrapper;
  const props = {
    isLoggedIn: false,
    displayDrawer: false,
    displayNotificationDrawer: jest.fn(),
    hideNotificationDrawer: jest.fn(),
    login: jest.fn(),
    logout: jest.fn(),
  };

  beforeEach(() => {
    wrapper = shallow(<App {...props} />);
  });

  it('should render without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should show login button when not logged in', () => {
    expect(wrapper.find('button').text()).toEqual('Log In');
  });

  it('should show logout button when logged in', () => {
    wrapper.setProps({ isLoggedIn: true });
    expect(wrapper.find('button').text()).toEqual('Log Out');
  });

  it('should map state to props correctly', () => {
    const state = fromJS({
      isUserLoggedIn: true,
      isNotificationDrawerVisible: false,
    });
    const expectedProps = {
      isLoggedIn: true,
      displayDrawer: false,
    };
    expect(mapStateToProps(state)).toEqual(expectedProps);
  });
});

