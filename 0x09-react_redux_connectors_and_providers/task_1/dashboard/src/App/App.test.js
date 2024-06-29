import { fromJS } from 'immutable';
import { mapStateToProps } from './App';

describe('mapStateToProps', () => {
  it('should return the correct object when state is provided for isLoggedIn', () => {
    const state = fromJS({
      isUserLoggedIn: true,
      isNotificationDrawerVisible: false
    });
    const expectedProps = {
      isLoggedIn: true,
      displayDrawer: false
    };
    expect(mapStateToProps(state)).toEqual(expectedProps);
  });

  it('should return the correct object when state is provided for displayDrawer', () => {
    const state = fromJS({
      isUserLoggedIn: false,
      isNotificationDrawerVisible: true
    });
    const expectedProps = {
      isLoggedIn: false,
      displayDrawer: true
    };
    expect(mapStateToProps(state)).toEqual(expectedProps);
  });

  it('should return the correct object when state is provided for both isLoggedIn and displayDrawer', () => {
    const state = fromJS({
      isUserLoggedIn: true,
      isNotificationDrawerVisible: true
    });
    const expectedProps = {
      isLoggedIn: true,
      displayDrawer: true
    };
    expect(mapStateToProps(state)).toEqual(expectedProps);
  });
});

