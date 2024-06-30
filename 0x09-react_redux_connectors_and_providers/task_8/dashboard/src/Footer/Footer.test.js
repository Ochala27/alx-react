import React from 'react';
import { shallow } from 'enzyme';
import Footer, { mapStateToProps } from './Footer';

describe('<Footer />', () => {
  let wrapper;
  const props = {
    user: { username: 'admin' },
  };

  beforeEach(() => {
    wrapper = shallow(<Footer {...props} />);
  });

  it('should render without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should show user information when logged in', () => {
    expect(wrapper.find('p').at(1).text()).toEqual('Logged in as: admin');
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
});

