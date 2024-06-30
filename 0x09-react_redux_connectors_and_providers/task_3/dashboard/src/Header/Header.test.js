import React from 'react';
import { shallow } from 'enzyme';
import Header, { mapStateToProps, mapDispatchToProps } from './Header';
import { logout } from '../actions/uiActions';

describe('<Header />', () => {
  let wrapper;
  const props = {
    user: { username: 'admin' },
    logout: jest.fn(),
  };

  beforeEach(() => {
    wrapper = shallow(<Header {...props} />);
  });

  it('should render without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should show user information when logged in', () => {
    expect(wrapper.find('p').text()).toEqual('Logged in as: admin');
  });

  it('should call logout when link is clicked', () => {
    wrapper.find('a').simulate('click');
    expect(props.logout).toHaveBeenCalled();
  });

  it('should map state to props correctly', () => {
    const state = fromJS({
      user: { username: 'admin' },
    });
    const expectedProps = {
      user: { username: 'admin' },
    };
    expect(mapStateToProps(state)).toEqual(expectedProps);
  });

  it('should map dispatch to props correctly', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).logout();
    expect(dispatch).toHaveBeenCalledWith(logout());
  });
});

