import { fromJS, Map } from 'immutable';
import { getAllCourses } from './courseSelector';

describe('Course Selectors', () => {
  it('should return all courses as a List', () => {
    const state = {
      courses: fromJS({
        entities: {
          1: { id: 1, name: 'Course 1' },
          2: { id: 2, name: 'Course 2' },
        },
      }),
    };

    const expected = fromJS([
      { id: 1, name: 'Course 1' },
      { id: 2, name: 'Course 2' },
    ]);

    const result = getAllCourses(state);
    expect(result).toEqual(expected);
  });

  it('should return an empty List when there are no courses', () => {
    const state = {
      courses: fromJS({
        entities: {},
      }),
    };

    const expected = List();
    const result = getAllCourses(state);
    expect(result).toEqual(expected);
  });
});

