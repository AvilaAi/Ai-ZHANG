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
						Chargée de la communication et de l'organisation d'une exposition d'art intitulée "D'autre façon
						de vivre" en partenariat avec la Mairie du 13e arrondissement de Paris
					</p>
				</div>
				<div className='card three'>
					<div className='title'>&nbsp;Co-fondatrice de l'Association GlobalPhoto</div>
					<p>
						Organisation d'une exposition photographique intitulée "Dock'ulture" en partenariat avec
						l'Université de Bretagne Occidentale
					</p>
				</div>
				<div className='card four'>
					<img width='100%' height='30%' src={word} alt='words' />
					<div className='title'>&nbsp; Traductrice indépendante</div>
					<p>
						Traduction de documents écrits et interprete orale aux événements pour clientele individuel et
						entreprises chinoises <br />
						Langues pratiquées: Chinois, Anglais, Français
					</p>
				</div>
				<div className='card five'></div>
				<div className='card six'></div>
				<div className='card seven'>
					<div className='title'>&nbsp;Fan de musique</div>

					<p>
						Junior's piano teacher && Rock band keyboard player <br /> Guitar && Drums beginner
					</p>
				</div>
				<div className='card eight'>
					<p>Code everyday.</p>
				</div>
			</div>
		</Container>
	);
};

export default Divers;
