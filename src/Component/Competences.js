import React from 'react';
import Container from './Container';
import { Chip, Grid } from '@material-ui/core';

const front = ['React JS', 'React Native', 'Redux', 'JavaScript ES5/ES6', 'HTML', 'CSS', 'SASS/SCSS', 'jQuery'];
const back = ['Node.js', 'MongoDB'];
const method = ['Git', 'AGILE mindset'];
const design = ['Adobe Photoshop', 'Adobe AI', 'Adobe XD'];
const frontlogo = [
	'https://cdn.worldvectorlogo.com/logos/sass-1.svg',
	'https://cdn.worldvectorlogo.com/logos/css-5.svg',
	'https://cdn.worldvectorlogo.com/logos/react.svg',
	'https://cdn.worldvectorlogo.com/logos/redux.svg',
	'https://cdn.worldvectorlogo.com/logos/javascript-4.svg',
	'https://cdn.worldvectorlogo.com/logos/jquery-1.svg',
	'https://cdn.worldvectorlogo.com/logos/html5.svg',
];
const Competences = () => {
	return (
		<Container>
			<Grid container xs={4} className='card'>
				<div className='card-title'>
					{' '}
					<p>Frontend</p>
				</div>
				<div>
					{front.map((e, i) => {
						return <Chip className='chips' label={e} key={i} />;
					})}
				</div>

				<div>
					{frontlogo.map((e, i) => {
						return (
							<span
								style={{
									display: 'flex',
									justifyContent: 'center',
									background: 'white',
									borderRadius: '50%',
									height: 55,
									width: 55,
									alignItems: 'center',
									margin: 10,
								}}
							>
								<img height='70%' width='80%' src={e} alt={i} key={i} />
							</span>
						);
					})}
				</div>
			</Grid>

			<div className='card'>
				<div className='card-title'>
					{' '}
					<p>Backend</p>
				</div>
				{back.map((e, i) => {
					return <Chip className='chips' label={e} key={i} />;
				})}
			</div>

			<div className='card'>
				<div className='card-title'>
					{' '}
					<p>Methode</p>
				</div>
				{method.map((e, i) => {
					return <Chip className='chips' label={e} key={i} />;
				})}
			</div>

			<div className='card'>
				{' '}
				<div className='card-title'>
					{' '}
					<p>Design</p>
				</div>
				{design.map((e, i) => {
					return <Chip className='chips' label={e} key={i} />;
				})}
			</div>
		</Container>
	);
};

Competences.propTypes = {};

export default Competences;
