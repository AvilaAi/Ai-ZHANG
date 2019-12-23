import React from 'react';
import PropTypes from 'prop-types';
import Container from './Container';
import { Divider } from '@material-ui/core';

const Formations = props => {
	return (
		<Container>
			<div id='formation'>
				<div
					className='year'
					style={{
						height: '100%',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-around',
						alignItems: 'center',
					}}
				>
					- <p>2019</p>-<p> 2016</p>-<p>2015</p>-<p>2014</p>-<p>2013</p>-<p>2012</p>-
				</div>

				<div className='card f1'>
					<div className='title'>
						Développeur Web & Mobile <span> LaCapsule Paris</span>
					</div>
					<p>123123123</p>
				</div>
				<div className='card f2'>
					<div className='title'>Développeur Web & Mobile</div>
					<p>123123123</p>
				</div>
				<div className='card f3'>
					{' '}
					<div className='title'>Développeur Web & Mobile</div>
					<p>123123123</p>
				</div>
				<div className='card f4'>
					{' '}
					<div className='title'>Développeur Web & Mobile</div>
					<p>123123123</p>
				</div>
				<div className='card f5'>
					{' '}
					<div className='title'>Développeur Web & Mobile</div>
					<p>123123123</p>
				</div>
				<div className='card f6'>
					{' '}
					<div className='title'>Développeur Web & Mobile</div>
					<p>123123123</p>
				</div>
			</div>
		</Container>
	);
};

Formations.propTypes = {};

export default Formations;
