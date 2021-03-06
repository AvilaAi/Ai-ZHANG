import React from 'react';
import Container from './Container';
const contact = [
	{
		name: 'Email',
		info: (
			<a href='mailto:ai-zhang@hotmail.com?' subject='subject text' rel='noopener noreferrer' target='_blank'>
				ai-zhang@hotmail.com
			</a>
		),
	},
	{
		name: 'LinkedIn',
		info: (
			<a href='https://www.linkedin.com/in/ai-zhang-1008/' rel='noopener noreferrer' target='_blank'>
				https://www.linkedin.com/in/ai-zhang-1008/
			</a>
		),
	},
	{
		name: 'GitHub',
		info: (
			<a href='https://github.com/AvilaAi' rel='noopener noreferrer' target='_blank'>
				https://github.com/AvilaAi
			</a>
		),
	},
	{ name: 'Tel', info: '+33 (0)6 52 02 33 92' },
	{ name: 'Adresse', info: '17 pl. du marché st-honoré, 75001 Paris, France' },
];
const Contact = () => {
	return (
		<Container>
			<div id='contact'>
				{contact.map((c, i) => {
					return (
						<div className='card contact'>
							<div className='label'>{c.name}</div>

							<p>{c.info}</p>
						</div>
					);
				})}
				<div className='foot'>&copy; | 2019 | Ai ZHANG </div>
			</div>
		</Container>
	);
};

export default Contact;
