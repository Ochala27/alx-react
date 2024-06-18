
import React from 'react';
import PropTypes from 'prop-types';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';

const BodySectionWithMarginBottom = (props) => {
  return (
    <div className={css(styles.bodySectionWithMargin)}>
      <BodySection {...props} />
    </div>
  );
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: '40px',
  },
});

export default BodySectionWithMarginBottom;

