// reducers/courseReducer.test.js
import { Map } from 'immutable';
import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';

describe('courseReducer', () => {
  const initialState = Map({
    courses: Map(),
    filter: 'DEFAULT'
  });

  it('should return the default state when no action is passed', () => {
    const state = courseReducer(undefined, {});
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it('should return the data passed with FETCH_COURSE_SUCCESS', () => {
    const data = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 }
    ];
    const normalizedData = coursesNormalizer(data);
    const expectedState = initialState.set('courses', Map(normalizedData.entities.courses));
    const state = courseReducer(undefined, { type: FETCH_COURSE_SUCCESS, data });
    expect(state.toJS()).toEqual(expectedState.toJS());
  });

  it('should mark the correct course as selected with SELECT_COURSE', () => {
    const data = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 }
    ];
    const normalizedData = coursesNormalizer(data);
    const initialStateWithCourses = initialState.set('courses', Map(normalizedData.entities.courses));
    const state = courseReducer(initialStateWithCourses, { type: SELECT_COURSE, index: 2 });
    expect(state.getIn(['courses', 2, 'isSelected'])).toBe(true);
  });

  it('should mark the correct course as unselected with UNSELECT_COURSE', () => {
    const data = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 }
    ];
    const normalizedData = coursesNormalizer(data);
    const initialStateWithCourses = initialState.set('courses', Map(normalizedData.entities.courses));
    const selectedState = courseReducer(initialStateWithCourses, { type: SELECT_COURSE, index: 2 });
    const state = courseReducer(selectedState, { type: UNSELECT_COURSE, index: 2 });
    expect(state.getIn(['courses', 2, 'isSelected'])).toBe(false);
  });
});

