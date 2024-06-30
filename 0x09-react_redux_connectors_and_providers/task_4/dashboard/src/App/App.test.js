import React from 'react';
import { shallow } from 'enzyme';
import { mapStateToProps } from './App';
import { fromJS, Map } from 'immutable';

describe('App Component', () => {
  it('mapStateToProps should return the correct props from state', () => {
    const state = fromJS({
      ui: {
        isUserLoggedIn: true,
        isNotificationDrawerVisible: false
      },
    });

    const expectedProps = {
      isLoggedIn: true,
      displayDrawer: false
    };

    const props = mapStateToProps(state);
    expect(props).toEqual(expectedProps);
  });
});

