import React, { memo } from 'react';
import PropTypes from 'prop-types';
import style from './Title.css';

const Title = ({ title }) => <h1 className={style.root}>{title}</h1>

Title.propTypes = {
	title: PropTypes.node.isRequired
};

export default memo(Title);