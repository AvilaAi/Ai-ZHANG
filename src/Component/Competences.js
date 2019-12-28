import React from 'react';
import Container from './Container';
import { Chip } from '@material-ui/core';

const front = ['React JS', 'React Native', 'Redux', 'JavaScript ES5/ES6', 'HTML', 'CSS', 'SASS/SCSS', 'jQuery'];
const back = ['Node.js', 'Express', 'MongoDB'];
const method = ['Git', 'AGILE mindset'];
const design = ['Adobe PS', 'Adobe AI', 'Adobe XD', 'Adobe ID'];
const frontlogo = [
	'https://cdn.worldvectorlogo.com/logos/sass-1.svg',
	'https://cdn.worldvectorlogo.com/logos/css-5.svg',
	'https://cdn.worldvectorlogo.com/logos/react.svg',
	'https://cdn.worldvectorlogo.com/logos/redux.svg',
	'https://cdn.worldvectorlogo.com/logos/javascript-4.svg',
	'https://cdn.worldvectorlogo.com/logos/jquery-1.svg',
	'https://cdn.worldvectorlogo.com/logos/html5.svg',
];

const gestionlogo = ['https://cdn.worldvectorlogo.com/logos/git.svg'];

const designlogo = [
	'https://cdn.worldvectorlogo.com/logos/adobe-xd.svg',
	'https://cdn.worldvectorlogo.com/logos/adobe-photoshop-cs6.svg',
	'https://cdn.worldvectorlogo.com/logos/adobe-illustrator-cs6.svg',
	'https://cdn.worldvectorlogo.com/logos/adobe-indesign-cs6.svg',
];

const backlogo = ['https://cdn.worldvectorlogo.com/logos/mongodb.svg'];

const Competences = () => {
	return (
		<Container>
			<div className='competence'>
				<div className='card frontend'>
					<div className='card-title'>
						{' '}
						Front<span>●</span>end
					</div>
					<div>
						{front.map((e, i) => {
							return <Chip className='chips' label={e} key={i} />;
						})}
					</div>

					<div style={{ display: 'flex' }}>
						{frontlogo.map((e, i) => {
							return (
								<div
									className='logo'
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
								</div>
							);
						})}
					</div>
				</div>

				<div className='card methode'>
					<div className='card-title'>
						{' '}
						Gestion<span>●</span>
					</div>
					{method.map((e, i) => {
						return <Chip className='chips' label={e} key={i} />;
					})}

					<div style={{ display: 'flex' }}>
						{gestionlogo.map((e, i) => {
							return (
								<div
									className='logo'
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
								</div>
							);
						})}
					</div>
				</div>

				<div className='card backend'>
					<div className='card-title'>
						{' '}
						Back<span>●</span>end
					</div>
					{back.map((e, i) => {
						return <Chip className='chips' label={e} key={i} />;
					})}
					<div style={{ display: 'flex' }}>
						{backlogo.map((e, i) => {
							return (
								<div
									className='logo'
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
								</div>
							);
						})}
					</div>
				</div>

				<div className='card design'>
					{' '}
					<div className='card-title'>
						{' '}
						Design<span>●</span>
					</div>
					{design.map((e, i) => {
						return <Chip className='chips' label={e} key={i} />;
					})}
					<div style={{ display: 'flex' }}>
						{designlogo.map((e, i) => {
							return (
								<div
									className='logo'
									style={{
										display: 'flex',
										justifyContent: 'center',

										borderRadius: '50%',
										height: 55,
										width: 55,
										alignItems: 'center',
										margin: 10,
									}}
								>
									<img height='70%' width='80%' src={e} alt={i} key={i} />
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</Container>
	);
};

Competences.propTypes = {};

export default Competences;
