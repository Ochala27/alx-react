
import { shallow, mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import React from 'react';
import Header from './Header';
import { AppContext, defaultUser } from '../App/AppContext';

describe('<Header />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  it('Tests that Header renders without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Tests that the component renders <img> and <h1> tags', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists('img')).toBe(true);
    expect(wrapper.exists('h1')).toBe(true);
  });

  it('Tests that the logoutSection is not created with default context', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: defaultUser }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').length).toBe(0);
  });

  it('Tests that the logoutSection is created when user is logged in', () => {
    const user = { email: 'test@example.com', isLoggedIn: true };
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut: jest.fn() }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').length).toBe(1);
    expect(wrapper.find('#logoutSection').text()).toContain('Welcome test@example.com');
  });

  it('Tests that clicking on logout link calls logOut function', () => {
    const logOut = jest.fn();
    const user = { email: 'test@example.com', isLoggedIn: true };
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    wrapper.find('#logoutSection a').simulate('click', { preventDefault() {} });
    expect(logOut).toHaveBeenCalled();
  });
});

