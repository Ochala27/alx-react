
import React from 'react';
import propTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const rowStyle = {
    backgroundColor: isHeader ? '#deb5b545' : '#f5f5f5ab',
  };

  const cellStyle = isHeader ? styles.headerCell : styles.cell;

  if (isHeader) {
    if (textSecondCell === null) {
      return <tr style={rowStyle}><th colSpan="2" className={css(cellStyle)}>{textFirstCell}</th></tr>;
    } else {
      return <tr style={rowStyle}><th className={css(cellStyle)}>{textFirstCell}</th><th className={css(cellStyle)}>{textSecondCell}</th></tr>;
    }
  }
  return <tr style={rowStyle}><td className={css(cellStyle)}>{textFirstCell}</td><td className={css(cellStyle)}>{textSecondCell}</td></tr>;
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: propTypes.bool,
  textFirstCell: propTypes.string.isRequired,
  textSecondCell: propTypes.oneOfType([
    propTypes.string,
    propTypes.number,
  ]),
};

const styles = StyleSheet.create({
  headerCell: {
    borderBottom: '1px solid',
    textAlign: 'center',
  },
  cell: {
    textAlign: 'center',
  },
});

export default CourseListRow;

