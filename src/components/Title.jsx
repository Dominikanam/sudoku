import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './Title.css';

const Title = ({ disabled, index, onChange, value }) =>
	<input
		className={styles.root}
		disabled={disabled}
		max={9}
		min={1}
		onChange={e => onChange(index, e.target.value)}
		type={'number'}
		value={value}
	/>;

Title.propTypes = {
	disabled: PropTypes.bool.isRequired,
	index: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
};

Title.defaultProps = {
	disabled: false,
	value: ''
};

export default memo(Title);