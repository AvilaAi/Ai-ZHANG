import React from 'react';
import Container from './Container';
import { Chip } from '@material-ui/core';

const mots = [
	'Polyvalente',
	'Ouverte d’esprit',
	'Créative',
	'Dynamique',
	'Curieuse',
	'Motivée',
	'Efficace',
	'Sens de l’écoute',
	"Sens de l'humour",
];
const Aboutme = props => {
	return (
		<Container>
			<div id='aboutme'>
				<div className='card'>
					<div className='title'>
						{' '}
						Ai・ZHANG <span>Développeuse web junior・Fullstack</span>
					</div>

					{mots.map((x, i) => {
						return <Chip className='chip' label={x} key={i} />;
					})}
					<div className='content'>
						<div className='desc'>
							{/* DOMAINES DE COMPÉTENCES Maîtrise des différentes techniques de vente (plus de 5 ans
							d’expériences en vente) et de la gestion de conflits. Aptitude à gérer une boutique
							(merchandising, stocks, achats, suivi clientèle, suivi du CA, des objectifs qualitatifs et
							quantitatifs). Aisance dans les relations publiques (facilité à développer et entretenir des
							liens de longue durée avec les différents interlocuteurs). Capacité à organiser des
							événements et des voyages. Connaissances linguistiques (anglais, français, chinois mandarin
							et chinois teochew). Je suis un développeur back et front-end. Curieux et passionné à propos
							de tout ce qui touche au web, j'essaie de rester à jour sur les technologies du web. J'aime
							travailler sur des projets variés: développement de sites internet avec PHP7 et MySQL,
							intégrer des sites internet avec HTML5 / CSS3 et jQuery, développer des sites administrables
							avec des CMS comme Wordpress. Une veille quotidienne et une polyvalence issue d'un parcours
							professionnel riche en expériences sont parmi les atouts que je souhaite à présent partager
							au sein d'une nouvelle équipe. */}
							123
						</div>
						<img
							width='200px'
							height='200px'
							src='https://res.cloudinary.com/dg0flooxn/image/upload/e_auto_color,r_0/v1577528472/lobpaaxetpmb7rn8z3ta.jpg'
							alt='ai-zhang'
						/>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Aboutme;
