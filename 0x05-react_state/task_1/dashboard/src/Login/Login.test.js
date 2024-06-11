
import { shallow, mount, unmount } from '../../config/setupTests';
import { StyleSheetTestUtils } from 'aphrodite';
import WithLoggingHOC from '../HOC/WithLogging';
import Login from './Login';

// shallow render/mount login component
describe('<Login />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Tests that Login renders without crashing', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Tests that the component renders 2 <input> and 2 <label> tags', () => {
    const Example = WithLoggingHOC(() => <Login />);
    const wrapper = mount(<Example />);
    expect(wrapper.find('input[type="email"]').length).toBe(1);
    expect(wrapper.find('input[type="password"]').length).toBe(1);
    expect(wrapper.find('label').length).toBe(2);
    wrapper.unmount();
  });

  it('Tests that the submit button is disabled by default', () => {
    const Example = WithLoggingHOC(() => <Login />);
    const wrapper = mount(<Example />);
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.props().disabled).toBe(true);
    wrapper.unmount();
  });

  it('Tests that after changing the value of the two inputs, the button is enabled', () => {
    const Example = WithLoggingHOC(() => <Login />);
    const wrapper = mount(<Example />);

    // Simulate changing email input
    const emailInput = wrapper.find('input[type="email"]');
    emailInput.simulate('change', { target: { value: 'test@example.com' } });

    // Simulate changing password input
    const passwordInput = wrapper.find('input[type="password"]');
    passwordInput.simulate('change', { target: { value: 'password' } });

    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.props().disabled).toBe(false);

    wrapper.unmount();
  });
});

