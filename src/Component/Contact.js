import React from 'react';
import Container from './Container';
const contact = [
	{ name: 'Email', info: 'ai.z08@hotmail.com' },
	{ name: 'Linkedin', info: 'https://www.linkedin.com/in/ai-zhang-94b871188/' },
	{ name: 'Tel', info: '+33 (0)6 52 02 33 92' },
	{ name: 'Adress', info: '75001 Paris, France' },
];
const Contact = () => {
	return (
		<Container>
			<div id='contact'>
				{contact.map((c, i) => {
					return (
						<div className='card contact'>
							{c.name}
							<div
								style={{
									width: '100%',
									display: 'flex',
									fontSize: 15,
									marginTop: 10,
									justifyContent: 'center',
								}}
							>
								<p>{c.info}</p>
							</div>
						</div>
					);
				})}
			</div>
		</Container>
	);
};

export default Contact;
