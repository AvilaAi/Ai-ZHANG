import React from 'react';
import Container from './Container';
const contact = [
	{
		name: 'Email',
		info: (
			<a href='mailto:ai.z08@hotmail.com?' subject='subject text' rel='noopener noreferrer' target='_blank'>
				ai.z08@hotmail.com
			</a>
		),
	},
	{
		name: 'Linkedin',
		info: (
			<a href='https://www.linkedin.com/in/ai-zhang-94b871188/' rel='noopener noreferrer' target='_blank'>
				https://www.linkedin.com/in/ai-zhang-94b871188/
			</a>
		),
	},
	{ name: 'Tel', info: '+33 (0)6 52 02 33 92' },
	{ name: 'Adress', info: 'pl. du marché st-honoré, 75001 Paris, France' },
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
			</div>
		</Container>
	);
};

export default Contact;
