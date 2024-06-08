// src/components/CourseList/CourseList.test.js
import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe('<CourseList />', () => {
  it('renders without crashing', () => {
    shallow(<CourseList />);
  });

  it('renders the 5 different rows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('CourseListRow')).toHaveLength(5);
  });
});

