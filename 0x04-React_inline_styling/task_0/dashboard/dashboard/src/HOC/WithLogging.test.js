import React from 'react';
import { mount } from 'enzyme';
import WithLogging from './WithLogging';

describe('WithLogging', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('logs mount and unmount for pure HTML element', () => {
    const WrappedComponent = () => <p />;
    const ComponentWithLogging = WithLogging(WrappedComponent);
    const wrapper = mount(<ComponentWithLogging />);
    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledTimes(2);
    expect(consoleSpy).toHaveBeenCalledWith('Component is mounted');
    expect(consoleSpy).toHaveBeenCalledWith('Component is going to unmount');
  });

  it('logs mount and unmount for Login component', () => {
    const Login = () => <div>Login component</div>;
    Login.displayName = 'Login';
    const ComponentWithLogging = WithLogging(Login);
    const wrapper = mount(<ComponentWithLogging />);
    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledTimes(2);
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is mounted');
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is going to unmount');
  });
});
