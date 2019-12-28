import React from 'react';
import Container from './Container';
import { Button } from '@material-ui/core';
const projets = [
	{
		name: 'Mini-Piano-Game',
		img: 'https://res.cloudinary.com/dg0flooxn/image/upload/v1577196694/portfolio/czapmuavs7prho8xxpnk.png',
		desc: 'Online piano game with demo songs',
		tech: 'React ・ Framwork Material-UI',
		link: 'https://mini-piano-game.herokuapp.com/',
	},
	{
		name: 'My-Moviz',
		img: 'https://res.cloudinary.com/dg0flooxn/image/upload/v1577196695/portfolio/yydflchemtr6t7jelykn.png',
		desc: 'Platform with the latest films in real time',
		tech: 'React ・ MongoDB ・ RestAPI',
		link: 'https://my-moviz.herokuapp.com/',
	},
	{
		name: 'Sudoku',
		img: 'https://res.cloudinary.com/dg0flooxn/image/upload/v1577202253/portfolio/dtrrhemmnv15pjipsy6q.png',
		desc: 'Simple classic sudoku game ',
		tech: 'HTML ・ CSS ・ JavaScript',
		link: 'https://avilaai.github.io/sudoku/',
	},
	{
		name: 'My-Gallery',
		img: 'https://res.cloudinary.com/dg0flooxn/image/upload/v1577250448/portfolio/oxm01dad55ltjckoqgwf.png',
		desc: 'Simple and weird gallery ',
		tech: 'HTML ・ CSS ・ SASS',
		link: 'https://avilaai.github.io/MyGallery/',
	},
	{
		name: 'Dev-Connecter',
		img: 'https://res.cloudinary.com/dg0flooxn/image/upload/v1577196707/portfolio/h0mdfvsmwluvewyy4zzz.png',
		desc: 'Full stack social network app for dev',
		tech: 'React ・ Redux ・ Node ・ Express',
		link: 'https://dev-connector-site.herokuapp.com/',
	},

	{
		name: 'Dogo',
		img:
			'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		desc: 'Social mobile app for dog owner ',
		tech: 'React Native ・ Redux ・ GoogleMapAPI',
		link: 'https://github.com/AvilaAi/DoGoFrontend',
	},
];

const Portfolio = props => {
	return (
		<Container>
			{/* <a style={{ display: 'table-cell' }} href='https://github.com/AvilaAi/MiniPianoGame' target='_blank'>
				text
			</a> */}
			<div id='portfolio'>
				{projets.map((p, i) => {
					return (
						<div className={`card port${i + 1}`} key={i}>
							<div
								className='content'
								style={{
									backgroundImage: `url(${p.img})`,
								}}
							>
								<div className='filter'>
									<a href={p.link} rel="noopener noreferrer" style={{ display: 'table-cell' }} target='_blank'>
										<Button>View</Button>
									</a>
								</div>
							</div>
							<div className='text name'>✔︎ &nbsp; {p.name}</div>
							<div className='text desc'>✦ &nbsp; {p.desc}</div>
							<div className='text tech'>✎ &nbsp; &nbsp;{p.tech}</div>
						</div>
					);
				})}
			</div>
		</Container>
	);
};

export default Portfolio;
