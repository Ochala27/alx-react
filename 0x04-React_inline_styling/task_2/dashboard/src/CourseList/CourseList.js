import React from 'react';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


const CourseList = ({ listCourses }) => {
  return (
    <table className={css(styles.table)}>
      <thead>
        <CourseListRow isHeader={true} textFirstCell="Available Courses" />
        <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
      </thead>
      <tbody className={css(styles.tableBody)}>
        {/* check if listCourses is empty */}
        {listCourses.length === 0 && (
          <tr>
            <td>No course available yet</td>
          </tr>
        )}
        {/* render listCourses */}
        {listCourses.map((course) => (
          <CourseListRow
            key={course.id}
            textFirstCell={course.name}
            textSecondCell={course.credit}
          />
        ))}
      </tbody>
    </table>
  );
};

CourseList.defaultProps = {
  listCourses: [],
};

CourseList.propTypes = {
  listCourses: PropTypes.array,
};

const styles = StyleSheet.create({
  table: {
    display: 'table',
    border: '1px solid',
    borderCollapse: 'collapse',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90%',
  },
  tableBody: {
    textAlign: 'start',
    borderBottom: '1px solid',
  },
});

export default CourseList;
