
import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Notifications from '../Notifications/Notifications';
import { getLatestNotification } from '../utils/utils';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <div className={css(styles.app)}>
        <Notifications listNotifications={listNotifications} />
        <Header />
        <div className={css(styles.appBody)}>
          <BodySectionWithMarginBottom title="Course list">
            <CourseList listCourses={listCourses} />
          </BodySectionWithMarginBottom>
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login />
          </BodySectionWithMarginBottom>
          <BodySection title="News from the School">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper purus nec eros finibus, non consequat ante tincidunt. Duis efficitur consequat sollicitudin. Proin congue massa id nisl laoreet vestibulum. Nulla facilisi.</p>
          </BodySection>
        </div>
        <div className={css(styles.appFooter)}>
          <Footer />
        </div>
      </div>
    );
  }
}

const listCourses = [
  {
    id: 1,
    name: 'ES6',
    credit: '60'
  },
  {
    id: 2,
    name: 'Webpack',
    credit: '20'
  },
  {
    id: 3,
    name: 'React',
    credit: '40'
  }
];

const listNotifications = [
  {
    id: 1,
    type: "default",
    value: "New course available"
  },
  {
    id: 2,
    type: "urgent",
    value: "New resume available"
  },
  {
    id: 3,
    html: {
      __html: getLatestNotification()
    },
    type: "urgent",
  }
];

const styles = StyleSheet.create({
  app: {
    fontFamily: 'Arial, Helvetica, sans-serif',
  },
  appBody: {
    // Define styles for the body
  },
  appFooter: {
    // Define styles for the footer
  }
});

export default App;

