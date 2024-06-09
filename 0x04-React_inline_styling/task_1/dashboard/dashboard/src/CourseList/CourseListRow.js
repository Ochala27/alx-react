
	import React from 'react';
	import './CourseList.css';
	import propTypes from 'prop-types';

	const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
		    const rowStyle = {
			            backgroundColor: isHeader ? '#deb5b545' : '#f5f5f5ab'
			        };

		    if (isHeader) {
			            if (textSecondCell === null) {
					                return <tr style={rowStyle}><th colSpan="2">{textFirstCell}</th></tr>;
					            } else {
							                return <tr style={rowStyle}><th>{textFirstCell}</th><th>{textSecondCell}</th></tr>;
							            }
			        }
		    return <tr style={rowStyle}><td>{textFirstCell}</td><td>{textSecondCell}</td></tr>;
	};

CourseListRow.defaultProps = {
	    isHeader: false,
	    textSecondCell: null
};

CourseListRow.propTypes = {
	    isHeader: propTypes.bool,
	    textFirstCell: propTypes.string.isRequired,
	    textSecondCell: propTypes.oneOfType([
		            propTypes.string,
		            propTypes.number,
		        ])
};

export default CourseListRow;

