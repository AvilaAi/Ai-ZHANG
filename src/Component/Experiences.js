import React from 'react';
import Container from './Container';

const Experiences = props => {
	return (
		<Container>
			<div className='experience'>
				<div className='twocard'>
					<div className='card orange'></div>
					<div className='card gray'></div>
				</div>
				<div className='card ex'>
					<div className='card-ex-content'>
						<div className='title'>Developpeur fullstack - Equally Work</div>
						<h4>Réalisation de A a Z du back office de la plateforme EquallyWork</h4>
						<p> Analyser les besoins et définir les fonctionnalités </p>
						<p>Rédiger les UserStorys et améliorer l’UX globale</p>
						<p>Conception de l’interface utilisateur et realisation de maquette</p>
						<p>Créer et gérer la base de donnée et réaliser les fonctions CRUD</p>
						<p>Fixer les bugs et améliorer la stabilité de la performance</p>
						<p>
							Présenter la progression aux réunion hebdomadaire avec le team et suivre le projet en
							méthode SCRUM{' '}
						</p>
						<p>Stack Front : React, Material-ui </p>
						<p>Stack Back : Express, MongoDB</p>
					</div>
				</div>
			</div>

			<div className='experience'>
				<div className='card ex'>
					{' '}
					<div className='card-ex-content'>
						<div className='title'>Teacher Assistante - Bootcamp Coding La Capsule</div>
						<h4>Assistante d’enseignement d’un batch de vingtaine étudiants </h4>
						<p> Répondre aux questions posées et résoudre les bugs rencontrés </p>
						<p>Accompagner aux étudiants pour réussir les challenges quotidiennes </p>
						<p>Stack Front: HTML, CSS, JavaScript, React, React Native, Bootstrap</p>
						<p>Stack Back: Node JS, Express, MongoDB</p>
					</div>
				</div>
				<div className='twocard'>
					<div className='card orange'></div>
					<div className='card gray'></div>
				</div>
			</div>

			<div className='experience'>
				<div className='twocard'>
					<div className='card orange'></div>
					<div className='card gray'></div>
				</div>

				<div className='card ex'>
					{' '}
					<div className='card-ex-content'>
						<div className='title'>Chargé communication et E-marketing - EasySent</div>
						<h4>Réalisation de A a Z du back office de la plateforme</h4>
						<p>
							Concevoir le site web de l’entreprise ainsi que l’interface du logiciel logistique interne
							et assister à l’équipe technique pour réaliser
						</p>
						<p>
							Créer des documents de communication en français et en anglais et representer l’entreprise
							aux salon de recrutement
						</p>
						<p>Gérer le compte WeChat de l’entreprise et publication des articles</p>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Experiences;
