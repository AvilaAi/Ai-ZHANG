import React from 'react';
import Container from './Container';
import word from '../logo/WordArt.png';
const Divers = props => {
	return (
		<Container>
			<div className='divers'>
				<div className='card one'></div>
				<div className='card two'>
					<div className='title'> &nbsp;Co-fondatrice de l'Association LifeLab</div>
					<p>
						Organisation d'une exposition d'art contemporain intitulée "D'autre façon de vivre" en
						partenariat avec la Mairie du 13e arrondissement de Paris
					</p>
				</div>
				<div className='card three'>
					<div className='title'>&nbsp;Co-fondatrice de l'Association GlobalPhoto</div>
					<p>
						Organisation d'une exposition photographique au thème "Dock'ulture" à l'Université de Bretagne
						Occidentale
					</p>
				</div>
				<div className='card four'>
					<img width='100%' height='30%' src={word} alt='words' />
					<div className='title'>&nbsp; Traductrice indépendante</div>
					<p>
						Traduction des documents écrits et interprétation orale aux événements pour clients individuels
						et entreprises chinoises
						<br />
						Langues pratiquées: Chinois, Anglais, Français
					</p>
				</div>
				<div className='card five'></div>
				<div className='card six'></div>
				<div className='card seven'>
					<div className='title'>&nbsp;Fan de musique</div>

					<p>Professeur de piano pour les enfants et joueuse de piano dans un groupe de rock</p>
				</div>
				<div className='card eight'>
					<p>Code everyday.</p>
				</div>
			</div>
		</Container>
	);
};

export default Divers;
