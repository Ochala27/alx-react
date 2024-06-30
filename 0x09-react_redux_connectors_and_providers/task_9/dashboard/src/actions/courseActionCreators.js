import { FETCH_COURSES_SUCCESS, SET_LOADING_STATE } from './actionTypes';

export const setCourses = (courses) => ({
  type: FETCH_COURSES_SUCCESS,
  payload: courses,
});

export const setLoadingState = (isLoading) => ({
  type: SET_LOADING_STATE,
  payload: isLoading,
});

export const fetchCourses = () => {
  return async (dispatch) => {
    dispatch(setLoadingState(true));
    try {
      const response = await fetch('/courses.json');
      const data = await response.json();
      dispatch(setCourses(data));
    } catch (error) {
      console.error('Error fetching courses:', error);
    } finally {
      dispatch(setLoadingState(false));
    }
  };
};

