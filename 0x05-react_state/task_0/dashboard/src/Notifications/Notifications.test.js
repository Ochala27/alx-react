import { shallow, mount } from '../../config/setupTests';
import { StyleSheetTestUtils } from 'aphrodite';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

// shallow render/mount Notifications component
describe('<Notifications />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
  ];

  const listNotifications2 = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: { __html: 'HTML' } }
  ];

  // Normal Notifications component tests
  it('tests that Notifications renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Checks first Item renders correct html', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.text()).toContain('Your notifications');
  });

  it('Tests the div Notifications is not rendered when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.Notifications').length).toBe(0);
    const wrapper2 = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper2.find('.div').length).toBe(0);
  });

  it('Tests that menuItem is rendered when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer listNotifications={[]} />);
    expect(wrapper.find('.Notifications').length).toBe(1);
  });

  it('Checks that new divs are rendered when the prop displayDrawer is passed as true', () => {
    const wrapper = shallow(<Notifications listNotifications={[]} />);
    const length = wrapper.find('div').length;
    const wrapper2 = shallow(<Notifications displayDrawer listNotifications={[]} />);
    const length2 = wrapper2.find('div').length;
    expect(length2).toBeGreaterThan(length);
  });

  it('Tests when passing empty array', () => {
    const wrapper = shallow(<Notifications listNotifications={[]} />);
    expect(wrapper.find('.NotificationItem').length).toBe(0);
  });

  it('Tests when passing NO array', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.NotificationItem').length).toBe(0);
  });

  // event listener tests
  it('Passes spy as markAsRead property and simulates a click on NotificationList component to test that spy is called with the right ID', () => {
    const ConsoleSpy = jest.spyOn(global.console, 'log');
    const wrapper = mount(<Notifications displayDrawer listNotifications={[]} />);
    wrapper.instance().markAsRead(1);
    expect(ConsoleSpy).toHaveBeenCalledWith(`Notification 1 has been read`);
    wrapper.unmount();
  });

  it('When updating the props of the component with the SAME listNotifications, the component doesn\'t rerender', () => {
    const wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications} />);
    wrapper.setProps({ listNotifications });
    expect(wrapper.find(NotificationItem).length).toBe(2);
  });

  it('When updating the props of the component with a LONGER listNotifications, the component DOES rerender', () => {
    const wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications} />);
    wrapper.setProps({ listNotifications: listNotifications2 });
    expect(wrapper.find(NotificationItem).length).toBe(3);
  });

  // Test handleDisplayDrawer
  it('calls handleDisplayDrawer when clicking on the menu item', () => {
    const handleDisplayDrawer = jest.fn();
    const wrapper = shallow(<Notifications handleDisplayDrawer={handleDisplayDrawer} />);
    wrapper.find('.pDiv').simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  // Test handleHideDrawer
  it('calls handleHideDrawer when clicking on the close button', () => {
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer handleHideDrawer={handleHideDrawer} />);
    wrapper.find('button').simulate('click');
    expect(handleHideDrawer).toHaveBeenCalled();
  });
});
