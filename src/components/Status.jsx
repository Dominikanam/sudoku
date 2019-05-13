import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './Status.css';

const Status = ({ correct }) =>
	<h2 className={styles.root}>{correct ? 'All good! Keep going.' : 'Something\'s wrong. Check your values.'}</h2>;

Status.propTypes = {
	correct: PropTypes.bool.isRequired
};

Status.defaultProps = {
	correct: true
};

export default memo(Status);
