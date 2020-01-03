import React from 'react';
import Container from './Container';

const formations = [
	{
		name: 'Développeur Web & Mobile ',
		lieu: ' Bootcamp Coding LaCapsule, Paris',
		desc: ' Formation développeur Web et Mobile FullStack JavaScript d’une durée de 400 heures',
		cours: 'JavaScript, React, React Native ...',
	},
	{
		name: 'Art, Design, Web Graphique et Multimédia',
		lieu: 'Institut Golden Collar, UFEC, Paris',
		desc: ' Formation Bac + 5',
		cours: ' Arts visuels et design, Histoire de l’art, Perspective, Photoshop, Illustrator et Indesign ... ',
	},
	{
		name: 'Marketing, Communication et Stratégies Commerciales',
		lieu: 'INSEEC, Paris',
		desc: ' Diplôme Bac + 5',
		cours:
			'Publicité et Sémtologie de la Marque, E-commerce et marketing digital , Stratégies design et packaging …',
	},
	{
		name: 'Management de Projets Internationaux Multilingues ',
		lieu: 'Universite Bretagne Occidental, Brest',
		desc: ' Diplôme Bac + 4',
		cours:
			'Conduite de projet, Négociation, Traduction professionnelle, Informatique appliquée, Japonais débutant ...',
	},
	{
		name: 'Langues Etrangères Appliquées ',
		lieu: 'Universite de Bretagne Occidentale, Brest',
		desc: ' Diplôme Bac + 3',
		cours:
			"Civilisation des pays anglophones, Traduction anglaise, Economie internationale, Techniques d'expression, ...",
	},
	{
		name: 'Français Langue Etrangère ',
		lieu: 'Universite Oceanique de Chine, Qingdao',
		desc: ' Diplôme Bac + 3',
		cours:
			'Civilisation française et institutions, Traduction française, Culture française générale, Littérature francophone	...',
	},
];

const Formations = props => {
	return (
		<Container>
			<div id='formation'>
				<div className='year'>
					⤌ <p>2019</p>⤍<p> 2016</p>⤌<p>2015</p>⤍<p>2014</p>⤌<p>2013</p>⤍<p>2012</p>
				</div>
				{formations.map((f, i) => {
					return (
						<div className={`card f${i + 1}`}>
							<div className='title'>{f.name}</div>
							<p className='desc'>✦ {f.desc}</p>
							<p>✎ Matières: {f.cours}</p>
							<p className='lieu'>⚑ &nbsp;{f.lieu}</p>
						</div>
					);
				})}
			</div>
		</Container>
	);
};

export default Formations;
