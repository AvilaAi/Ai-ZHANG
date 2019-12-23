import React from 'react';
import PropTypes from 'prop-types';
import Container from './Container';

const Portfolio = props => {
	return (
		<Container>
			<div id='portfolio'>
				<div className='card port1'>
					<div className='content'></div>
					<div className='text'>a mini piano game</div>
				</div>
				<div className='card port2'>
					{' '}
					<div className='content'></div>
					<div className='text'>a mini piano game</div>
				</div>
				<div className='card port3'>
					{' '}
					<div className='content'></div>
				</div>
				<div className='card port4'>
					{' '}
					<div className='content'></div>
				</div>
				<div className='card port5'>
					{' '}
					<div className='content'></div>
				</div>
				<div className='card port6'>
					{' '}
					<div className='content'></div>
				</div>
			</div>
		</Container>
	);
};

Portfolio.propTypes = {};

export default Portfolio;
