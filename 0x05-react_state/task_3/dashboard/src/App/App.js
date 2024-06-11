
// src/App/App.js
import React, { Component } from 'react';
import Notifications from '../Notifications/Notifications';
import { getLatestNotification } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { AppContext, defaultUser } from './AppContext';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: defaultUser,
      listNotifications: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, html: { __html: getLatestNotification() }, type: "urgent" }
      ]
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', this.keyDownHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDownHandler);
  }

  keyDownHandler = (e) => {
    if (e.keyCode === 72 && e.ctrlKey) {
      alert('Logging you out');
      this.logOut();
    }
  }

  handleDisplayDrawer = () => {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer = () => {
    this.setState({ displayDrawer: false });
  }

  logIn = (email, password) => {
    this.setState({
      user: { email, password, isLoggedIn: true }
    });
  }

  logOut = () => {
    this.setState({
      user: defaultUser
    });
  }

  markNotificationAsRead = (id) => {
    this.setState(prevState => ({
      listNotifications: prevState.listNotifications.filter(notification => notification.id !== id)
    }));
  }

  render() {
    const { user, listNotifications } = this.state;

    const listCourses = [
      { id: 1, name: 'ES6', credit: '60' },
      { id: 2, name: 'Webpack', credit: '20' },
      { id: 3, name: 'React', credit: '40' }
    ];

    return (
      <AppContext.Provider value={{ user, logOut: this.logOut }}>
        <div className={css(bodyStyles.App)}>
          <Notifications 
            listNotifications={listNotifications} 
            displayDrawer={this.state.displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
            markNotificationAsRead={this.markNotificationAsRead}
          />
          <Header />
          <div className="App-body">
            {user.isLoggedIn
              ? 
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
              : 
              <BodySectionWithMarginBottom title="Login in to continue">
                <Login logIn={this.logIn} />
              </BodySectionWithMarginBottom>
            }
            <BodySection title="News from the School"><p>Boring random text</p></BodySection>
          </div>
          <div className={css(footerStyles.Footer)}>
            <Footer />
          </div>
        </div>
      </AppContext.Provider>
    );
  }
}

const primaryColor = '#E11D3F';

const bodyStyles = StyleSheet.create({
  App: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
  }
});

const footerStyles = StyleSheet.create({
  Footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTop: `3px solid ${primaryColor}`,
    padding: '1rem',
    fontStyle: 'italic',
  }
});

export default App;

