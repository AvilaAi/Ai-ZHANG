import React from 'react';
import Container from './Container';
import { Chip } from '@material-ui/core';

const mots = [
	'Polyvalente',
	'Ouverte d’esprit',
	'Créative',
	'Curieuse',
	'Motivée',
	'Efficace',
	'Sens de la logique',
	"Sens de l'humour",
];
const Aboutme = props => {
	return (
		<Container>
			<div id='aboutme'>
				<div className='card'>
					<div className='maincard'>
						<div className='title'>
							{' '}
							<span>Ai・ZHANG</span>Développeur web junior・Fullstack
						</div>
						<hr />
						{mots.map((x, i) => {
							return <Chip className='chip' label={x} key={i} />;
						})}
						<div className='content'>
							<div className='desc'>
								<p>
									« Sensible à la logique, aux chiffres, aux objets concrets, j'ai découvert il y a 3
									ans que le monde du développement informatique correspondait parfaitement à ma
									nature. C'est pour cela, qu'après des études en marketing et communication qui
									correspondaient pas à mes atouts, j'ai décidé de m'orienter vers ce domaine
									passionant.
									<br />
									<br />
									Mes expériences dans le Web design, ma maîtrise des logiciels informatiques et un
									bon sens de la logique sont mes atouts. Ma passion pour le developpement
									informatique m'a permis de progresser rapidement dans ce domaine.
								</p>
								<p>
									En tant que développeur polyvalente, je maîtrise plusieurs technologies pour le
									front-end et le back-end (HTML, CSS, JavaScript, React, NodeJs...) j'ai pu réaliser
									plusieurs projets web personnels qui m'ont permis d'approfondir mes connaissances
									sur ces langages. Je suis également curieuse sur la veille technologique.
								</p>

								<p>
									Je suis actuellement à la recherche d'un emploi à plein temps en tant que
									développeur web et intégrer une nouvelle équipe dynamique et motivée. »
								</p>
							</div>
							<img
								width='180px'
								src='https://res.cloudinary.com/dg0flooxn/image/upload/v1578226149/jvhfuvcklnxcgjenz0zw.jpg'
								alt='ai-zhang'
							/>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Aboutme;
