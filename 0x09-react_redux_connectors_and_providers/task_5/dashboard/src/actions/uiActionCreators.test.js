import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { loginRequest } from './uiActionCreators';
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('ui action creators', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates LOGIN and LOGIN_SUCCESS when login is successful', () => {
    fetchMock.getOnce('/login-success.json', {
      body: { success: true },
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@test.com', password: 'password' } },
      { type: LOGIN_SUCCESS },
    ];

    const store = mockStore({});

    return store.dispatch(loginRequest('test@test.com', 'password')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates LOGIN and LOGIN_FAILURE when login fails', () => {
    fetchMock.getOnce('/login-success.json', {
      throws: new Error('Network Error'),
    });

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@test.com', password: 'password' } },
      { type: LOGIN_FAILURE },
    ];

    const store = mockStore({});

    return store.dispatch(loginRequest('test@test.com', 'password')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

