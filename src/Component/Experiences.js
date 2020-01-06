import React from 'react';
import Container from './Container';
import logoew from '../logo/logo.png';
import logoes from '../logo/logoeasysent.png';
import logoca from '../logo/logocapsule.png';

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
						<div className='title'>
							Développeur fullstack - Equally Work <span>08/2019 - 12/2019</span>
						</div>
						<h5>Réalisation de A à Z du back-office de la plateforme EquallyWork</h5>
						<p>Recueil des besoins fonctionnels remontés par l’équipe</p>
						<p>Analyse des besoins et rédaction des UserStories</p>
						<p>
							Proposition sur les choix techniques (Stack MERN) et sur les méthodes de travail
							(AGILE/SCRUM)
						</p>
						<p>Conception de l’interface utilisateur et realisation des prototypes et des maquettes</p>
						<p>
							Élaboration des solutions techniques pour répondre aux besoins fonctionnels et aux enjeux de
							performance
						</p>
						<p>Gestion de bases de données et création du schéma de données</p>

						<p>Présentation de la progression du projet lors du team meeting hebdomadaire</p>
						<p>Participation à la définition des bonnes pratiques de développement</p>
						<p>Corrections des bugs et amélioration de l'UI/UX globale</p>
						<p>
							Mise à jour de la documentation fonctionnelle et technique, améliorant continuellement le
							code{' '}
						</p>
					</div>
					<img src={logoew} alt='ew' />
				</div>
			</div>

			<div className='experience'>
				<div className='card ex'>
					{' '}
					<div className='card-ex-content'>
						<div className='title'>
							Teacher Assistante - Bootcamp Coding La Capsule<span>06/2019 - 08/2019</span>
						</div>
						<h5>Assistante d’enseignement d’un batch d'une vingtaine d'étudiants </h5>
						<p>Participation aux revues de codes des étudiants</p>
						<p>Prise en charge des demandes d'aide ainsi que des corrections des bugs</p>
						<p>Veille régulière sur les dernières technologies</p>
						<p>Aide aux étudiants à réussir les challenges quotidiennes </p>
						<p>Stack Front: HTML, CSS, JavaScript, React, React Native, Bootstrap</p>
						<p>Stack Back: Node JS, Express, MongoDB</p>
					</div>
					<img className='logoca' src={logoca} alt='capsule' />
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
						<div className='title'>
							Chargé communication et Marketing - EasySent<span>10/2016 - 10/2018</span>
						</div>
						<h5>Assistante polyvalente liée à la communication numérique</h5>

						<p>Élaboration des supports de communication et création de visuels</p>
						<p>Diverses recherches, conceptions graphiques, réalisation des prototypes du site </p>
						<p>Gestion du compte de l’entreprise sur réseaux sociaux (Wechat)</p>
						<p>Animation éditoriale et graphique de contenus pour diffusion</p>
						<p>Rédaction de la newsletter interne</p>
						<p>Gestion des retours et des demandes d’information des clients </p>
						<p>Veille au bon traitement des commandes</p>
						<p>
							Collaboration avec le département IT pour s’assurer du bon fonctionnement de l'application
							de la gestion des commandes
						</p>
						<p>Design du stand et représentation de l'entreprise aux salons de recrutement</p>
						<p>Organisation d'événements (online/offline) à destination des clients chinois</p>
					</div>
					<img className='logoes' src={logoes} alt='es' />
				</div>
			</div>
		</Container>
	);
};

export default Experiences;
