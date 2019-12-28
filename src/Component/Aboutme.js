import React from 'react';
import Container from './Container';

const Aboutme = props => {
	return (
		<Container>
			<div id='aboutme'>
				<div className='card'>
					<div className='title'> Ai ZHANG</div>
					<hr />
					<hr />
					<div className='info-perso'>
						<img
							width='200px'
							height='200px'
							src='https://res.cloudinary.com/dg0flooxn/image/upload/c_scale,r_0,w_255/v1577528472/lobpaaxetpmb7rn8z3ta.jpg'
							alt='ai-zhang'
						/>
					</div>
					Ouverte d’esprit - Sociable - Dynamique - Polyvalente - Curieuse - Organisée - Motivée - Sens de
					l’écoute DOMAINES DE COMPÉTENCES Maîtrise des différentes techniques de vente (plus de 5 ans
					d’expériences en vente) et de la gestion de conflits. Aptitude à gérer une boutique (merchandising,
					stocks, achats, suivi clientèle, suivi du CA, des objectifs qualitatifs et quantitatifs). Aisance
					dans les relations publiques (facilité à développer et entretenir des liens de longue durée avec les
					différents interlocuteurs). Capacité à organiser des événements et des voyages. Connaissances
					linguistiques (anglais, français, chinois mandarin et chinois teochew).
				</div>
			</div>
		</Container>
	);
};

export default Aboutme;
