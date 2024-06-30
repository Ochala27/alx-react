import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../App';
import Notifications from '../Notifications';

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App fetchNotifications={() => {}} listNotifications={[]} loading={false} />);
    expect(wrapper.exists()).toBe(true);
  });

  // Add more tests as needed
});

