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
									« Curieuse et passionnée à propos de tout ce qui touche au web, je me suis
									réorientée depuis les métiers du marketing et de la communication. Des expériences
									dans Web design, la maîtrise des logiciels informatiques et un bon sens de la
									logique ce sont mes atouts qui m'ont permet de vite progresser pendant un an de
									l'aventure dans le monde de code.
								</p>
								<p>
									En tant que développeur polyvalent, je maîtrise les technologies pour le fontend et
									le backend, j'ai pu réalisé plusieur projets web personnels qui m'a permis
									d'approfondir mes connaissances surtout dans la language JavaScript, j'aime aussi
									découvrir de nouvelles techenologies.
								</p>

								<p>
									Je suis actuellement à la recherche d'un emploi à plein temps en tant que
									développeur web et j'aurai plaisir d'intégrer une nouvelle équipe. »
								</p>
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
			</div>
		</Container>
	);
};

export default Aboutme;
