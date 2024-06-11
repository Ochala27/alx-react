
import { shallow, mount } from 'enzyme';
import React from 'react';
import Footer from './Footer';
import { AppContext, defaultUser } from '../App/AppContext';

describe('<Footer />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  it('Tests that Footer renders without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Contains the text "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain('Copyright');
  });

  it('Does not display the "Contact us" link when user is logged out', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: defaultUser }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a').length).toBe(0);
  });

  it('Displays the "Contact us" link when user is logged in', () => {
    const user = { email: 'test@example.com', isLoggedIn: true };
    const wrapper = mount(
      <AppContext.Provider value={{ user }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a').length).toBe(1);
    expect(wrapper.find('a').text()).toBe('Contact us');
  });
});

