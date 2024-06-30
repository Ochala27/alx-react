import { createSelector } from 'reselect';
import { List } from 'immutable';

const getCourses = (state) => state.courses.get('entities');

export const getAllCourses = createSelector(
  [getCourses],
  (courses) => courses.valueSeq().toList()
);

