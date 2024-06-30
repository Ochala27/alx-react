import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { setCourses, fetchCourses } from './courseActionCreators';
import { FETCH_COURSES_SUCCESS, SET_LOADING_STATE } from './actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Course Action Creators', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('fetchCourses dispatches the correct actions on successful fetch request', () => {
    const courses = [
      { id: 1, name: 'Course 1' },
      { id: 2, name: 'Course 2' },
    ];

    fetchMock.getOnce('/courses.json', {
      body: courses,
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: SET_LOADING_STATE, payload: true },
      { type: FETCH_COURSES_SUCCESS, payload: courses },
      { type: SET_LOADING_STATE, payload: false },
    ];

    const store = mockStore({ courses: [] });

    return store.dispatch(fetchCourses()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('fetchCourses handles errors correctly', () => {
    fetchMock.getOnce('/courses.json', {
      throws: new Error('Failed to fetch'),
    });

    const expectedActions = [
      { type: SET_LOADING_STATE, payload: true },
      { type: SET_LOADING_STATE, payload: false },
    ];

    const store = mockStore({ courses: [] });

    return store.dispatch(fetchCourses()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

