
import React from 'react';
import { shallow, mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import App from './App';
import { AppContext } from './AppContext';

describe('<App />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  it('Tests that App renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Tests that logOut updates the state correctly', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn('test@example.com', 'password');
    expect(wrapper.state('user').isLoggedIn).toBe(true);
    wrapper.instance().logOut();
    expect(wrapper.state('user').isLoggedIn).toBe(false);
  });

  it('Tests that logIn updates the state correctly', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn('test@example.com', 'password');
    expect(wrapper.state('user').isLoggedIn).toBe(true);
    expect(wrapper.state('user').email).toBe('test@example.com');
  });

  it('Tests that logOut updates the state correctly', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn('test@example.com', 'password');
    wrapper.instance().logOut();
    expect(wrapper.state('user').isLoggedIn).toBe(false);
    expect(wrapper.state('user').email).toBe('');
  });

  it('Tests that CourseList is rendered when user is logged in', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: true } }}>
        <App />
      </AppContext.Provider>
    );
    expect(wrapper.find('CourseList').length).toBe(1);
  });

  it('Tests that Login is rendered when user is not logged in', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
        <App />
      </AppContext.Provider>
    );
    expect(wrapper.find('Login').length).toBe(1);
  });
});

