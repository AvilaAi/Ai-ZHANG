import React, { useState } from 'react';
// Imports - Router

const Cover = props => {
	const [clickEnter, setClickEnter] = useState(false);

	const handleClick = () => {
		setClickEnter(true);
		setTimeout(() => {
			props.history.push('/aboutme');
		}, 1700);
	};

	return (
		<div className='cover'>
			<h1 className='line typing'>Hello, World!</h1>

			<div className='enter' onClick={() => handleClick()}>
				<span> Discovery </span>
				<div className={clickEnter ? 'color change' : 'color'}></div>
			</div>
		</div>
	);
};

export default Cover;
