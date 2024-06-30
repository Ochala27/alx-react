import React from 'react';
import { shallow } from 'enzyme';
import { CourseList } from './CourseList'; // Import the unconnected component for testing
import { fetchCourses } from '../actions/courseActionCreators';
import CourseListRow from './CourseListRow';
describe('CourseList', () => {
  let fetchCoursesMock, selectCourseMock, unSelectCourseMock, wrapper;

  beforeEach(() => {
    fetchCoursesMock = jest.fn();
    selectCourseMock = jest.fn();
    unSelectCourseMock = jest.fn();
    const courses = [
      { id: '1', name: 'Course 1', credit: 3, isSelected: false },
      { id: '2', name: 'Course 2', credit: 2, isSelected: true },
    ];
    wrapper = shallow(
      <CourseList
        courses={courses}
        fetchCourses={fetchCoursesMock}
        selectCourse={selectCourseMock}
        unSelectCourse={unSelectCourseMock}
      />
    );
  });

  it('fetchCourses is called when the component is mounted', () => {
    expect(fetchCoursesMock).toHaveBeenCalled();
  });

  it('onChangeRow dispatches selectCourse action when checked is true', () => {
    wrapper.find(CourseListRow).at(0).prop('onChangeRow')('1', true);
    expect(selectCourseMock).toHaveBeenCalledWith('1');
  });

  it('onChangeRow dispatches unSelectCourse action when checked is false', () => {
    wrapper.find(CourseListRow).at(1).prop('onChangeRow')('2', false);
    expect(unSelectCourseMock).toHaveBeenCalledWith('2');
  });
});

