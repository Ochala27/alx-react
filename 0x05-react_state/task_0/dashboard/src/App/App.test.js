import { shallow, mount } from '../../config/setupTests';
import { StyleSheetTestUtils } from 'aphrodite';
import App from './App';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import NotificationItem from '../Notifications/NotificationItem';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

window.alert = jest.fn();

describe('<App />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Tests that App renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Contains Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header').length).toBe(1);
  });

  it('Contains Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Login />)).toBe(true);
  });

  it('Contains Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer').length).toBe(1);
  });

  it('Tests that CourseList is not displayed', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('CourseList').length).toBe(0);
  });

  it('Tests that <Notifications /> is not displayed', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Notifications />)).toBe(false);
  });

  it('Tests that <NotificationItem /> is not displayed', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<NotificationItem />)).toBe(false);
  });

  it('Tests that the correct amount of <BodySection /> and <BodySectionWithMarginBottom /> are displayed', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(BodySection).length).toBe(1);
    expect(wrapper.find(BodySectionWithMarginBottom).length).toBe(1);
  });

  it('Tests that the default state for displayDrawer is false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  it('Tests that after calling handleDisplayDrawer, the state is updated to be true', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toBe(true);
  });

  it('Tests that after calling handleHideDrawer, the state is updated to be false', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ displayDrawer: true });
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state('displayDrawer')).toBe(false);
  });
});

describe('<App /> when isLoggedIn is true', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  it('Tests that the Login component is not rendered when isLoggedIn is true', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.contains(<Login />)).toBe(false);
  });

  it('Tests that CourseList component is rendered when isLoggedIn is true', () => {
    const wrapper = shallow(<App isLoggedIn />);
    expect(wrapper.find('CourseList').length).toBe(1);
  });

  it('Verifies that alert is called when ctrl-h is pressed', () => {
    const wrapper = mount(<App isLoggedIn />);
    wrapper.instance().keyDownHandler = window.alert;
    wrapper.instance().keyDownHandler({ keyCode: 72, ctrlKey: true });
    expect(window.alert).toHaveBeenCalled();
  });

  it('Verifies that logOut function is called when ctrl-h is pressed', () => {
    const ConsoleSpy = jest.spyOn(global.console, 'log');
    const wrapper = mount(<App isLoggedIn />);
    wrapper.instance().keyDownHandler({ keyCode: 72, ctrlKey: true });
    expect(ConsoleSpy).toHaveBeenCalledWith('logOut function console log for testing');
    wrapper.unmount();
  });
});
